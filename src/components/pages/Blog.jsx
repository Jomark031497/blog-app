import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
const Blog = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const classes = useStyles();
  const [blog, setBlog] = useState({});

  const blogs = useSelector(state => state.blogs);

  useEffect(() => {
    console.log("useEffect run");
    const filterBlog = blogs.filter((blog) => blog.id === id);
    const activeBlog = filterBlog[0];
    setBlog(activeBlog);

    console.log(activeBlog);
  }, [id, blogs]);

  return (
    <div className={classes.root}>
      {blog ? (
        <div>
          <div className={classes.frontmatter}>
            <h2 className={classes.title}>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
          <hr className={classes.divider} />

          <p>{blog.content}</p>
        </div>
      ) : (
        <div>Blog not found</div>
      )}
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    margin: "3rem auto",
  },
  divider: {
    margin: "2rem auto",
  },
  frontmatter: {
    margin: "1rem auto",
    textAlign: "center",
  },
  title: {
    color: "#f1356d",
  },
});

export default Blog;
