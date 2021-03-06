import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../../redux";
import { useHistory } from "react-router-dom";

const AddBlog = () => {
  const classes = useStyles();
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  const user = useSelector((state) => state.userLogin.userInfo);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!blog.title || !blog.content) return;

    const newBlog = {
      title: blog.title,
      author: user.username,
      content: blog.content,
    };

    dispatch(createBlog(newBlog));

    setBlog({ title: "", author: "", content: "" });
    history.push("/");
  };

  return (
    <>
      {user ? (
        <form onSubmit={handleSubmit} className={classes.root}>
          <Typography
            variant="h5"
            color="textPrimary"
            className={classes.header}
          >
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

          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.submitBtn}
          >
            Add Blog
          </Button>
        </form>
      ) : (
        <p>please login first</p>
      )}
    </>
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
