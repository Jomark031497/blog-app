import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../redux";

const Blog = (props) => {
  const { id } = props.match.params;
  const classes = useStyles();

  const dispatch = useDispatch();
  const currentBlog = useSelector((state) => state.getBlog.blog);

  useEffect(() => {
    dispatch(getBlog(id));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      {currentBlog && currentBlog.loading ? (
        <div>Loading!!!</div>
      ) : (
        <div>
          <div className={classes.frontmatter}>
            <h2 className={classes.title}>{currentBlog.title}</h2>
            <p>Written by {currentBlog.author}</p>
          </div>
          <hr className={classes.divider} />

          <div className={classes.blogContent}>{currentBlog.content}</div>
        </div>
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
  blogContent: {
    whiteSpace: "pre-wrap",
    margin: "3rem",
  },
});

export default Blog;
