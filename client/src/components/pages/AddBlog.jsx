import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddBlog = () => {
  const classes = useStyles();
  const history = useHistory();

  const [blog, setBlog] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!blog.title || !blog.author || !blog.content) return;

    try {
      await axios.post("/blogs/create", blog, {
        headers: { ContentType: "application/json" },
      });
    } catch (err) {
      console.log(err.message);
    }

    setBlog({ title: "", author: "", content: "" });

    history.push("/");
  };
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Typography variant="h5" color="textPrimary" className={classes.header}>
        Add a New Blog
      </Typography>
      <div className={classes.fields}>
        <TextField
          variant="outlined"
          label="Title"
          fullWidth
          className={classes.textfield}
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          required
        />
      </div>

      <div className={classes.fields}>
        <TextField
          multiline
          label="Content"
          variant="outlined"
          fullWidth
          rows={8}
          className={classes.textfield}
          value={blog.content}
          onChange={(e) => setBlog({ ...blog, content: e.target.value })}
          required
        />
      </div>

      <Button type="submit" variant="outlined" color="primary" className={classes.submitBtn}>
        Add Blog
      </Button>
    </form>
  );
};

const useStyles = makeStyles({
  root: {
    padding: "2rem",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  fields: {
    marginBottom: "1rem",
  },
  submitBtn: {
    width: "7rem",
    margin: "0 auto",
  },
});

export default AddBlog;
