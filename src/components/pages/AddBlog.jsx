import { makeStyles } from "@material-ui/styles";
import { useContext, useState } from "react";
import { BlogContext } from "../../context/blogContext";

const AddBlog = () => {
  const classes = useStyles();
  const { dispatch } = useContext(BlogContext);

  const [blog, setBlog] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!blog.title || !blog.author || !blog.content) return;
    dispatch({ type: "ADD_BLOG", blog });
    console.log("okay!");
    setBlog({ title: "", author: "", content: "" });
  };
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <h2 className={classes.header}>Add a New Blog</h2>
      <div className={classes.fields}>
        <p className={classes.label}>title</p>
        <input
          type="text"
          id="title"
          className={classes.textfield}
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          required
        />
      </div>

      <div className={classes.fields}>
        <p className={classes.label}>author</p>
        <input
          type="text"
          id="author"
          className={classes.textfield}
          value={blog.author}
          onChange={(e) => setBlog({ ...blog, author: e.target.value })}
          required
        />
      </div>
      <div className={classes.fields}>
        <p className={classes.label}>content</p>
        <textarea
          type="text"
          id="content"
          className={classes.textfield}
          value={blog.content}
          onChange={(e) => setBlog({ ...blog, content: e.target.value })}
          required
        />
      </div>

      <button type="submit" className={classes.submitBtn}>
        Add Blog
      </button>
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
    color: "#f1356d",
    textAlign: "center",
    marginBottom: "2rem",
  },
  fields: {
    marginBottom: "1rem",
  },
  label: {
    textTransform: "capitalize",
    fontSize: "1.3rem",
  },
  textfield: {
    width: "100%",
    padding: ".7rem",
  },
  submitBtn: {
    background: "#f1356d",
    border: "none",
    borderRadius: "1rem",
    padding: "1rem",
    fontSize: "1rem",
    color: "#fff",
    width: "20%",
    margin: "0 auto",
    cursor: "pointer",
  },
});

export default AddBlog;
