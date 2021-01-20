import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../redux";
import { Typography } from "@material-ui/core";
import moment from "moment";
import BlogAddComment from "./BlogAddComment";
import BlogComments from "./BlogComments";

const BlogDetails = (props) => {
  const { id } = props.match.params;
  const classes = useStyles();

  const dispatch = useDispatch();
  const currentBlog = useSelector((state) => state.getBlog.blog);

  useEffect(() => {
    dispatch(getBlog(id));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={classes.root}>
        {currentBlog && currentBlog.loading ? (
          <div>Loading!!!</div>
        ) : (
          <div className={classes.blogDetails}>
            <div className={classes.frontmatter}>
              <Typography variant="h3" className={classes.title}>
                {currentBlog.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Written by {currentBlog.author} -{" "}
                {moment(currentBlog.createdAt).fromNow()}
              </Typography>
            </div>
            <div className={classes.blogContent}>{currentBlog.content}</div>
          </div>
        )}
        <div className={classes.commentSection}>
          <Typography variant="h6">Discussion</Typography>
          <BlogAddComment blogId={currentBlog._id} />
          <BlogComments />
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles({
  root: {
    padding: "2rem 2rem",
  },
  blogDetails: {},
  frontmatter: {
    margin: " 1rem auto",
  },
  title: {
    color: "#f1356d",
    marginBottom: "1rem",
  },
  blogContent: {
    whiteSpace: "pre-wrap",
  },
  commentSection: {
    margin: "2rem auto",
  },
});

export default BlogDetails;
