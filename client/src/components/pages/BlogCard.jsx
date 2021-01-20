import React from "react";
import { makeStyles } from "@material-ui/styles";
import { IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ThumbUp from "@material-ui/icons/ThumbUpAlt";
import ThumbDown from "@material-ui/icons/ThumbDown";
import CommentIcon from "@material-ui/icons/Comment";
import { upvoteBlog } from "../../redux";
import { useDispatch } from "react-redux";
const BlogCard = ({ blog }) => {
  const classes = useStyles();

  const calculateVotes = (up, down) => {
    return parseInt(up) - parseInt(down);
  };

  const dispatch = useDispatch();

  const handleUpvote = (e) => {
    dispatch(upvoteBlog(e.currentTarget.id));
  };
  
  return (
    <>
      <div className={classes.root} key={blog._id}>
        <div className={classes.voteButtons}>
          <IconButton onClick={handleUpvote} id={blog._id}>
            <ThumbUp />
          </IconButton>
          <div>{calculateVotes(blog.upvotes, blog.downvotes)}</div>
          <IconButton>
            <ThumbDown />
          </IconButton>
        </div>
        <div className={classes.frontmatter}>
          <Typography variant="subtitle1" color="textSecondary">
            posted by {blog.author}
          </Typography>
          <Typography variant="h5" className={classes.blogTitle}>
            <Link to={`${blog._id}`} className={classes.routerLink}>
              {blog.title}
            </Link>
          </Typography>
          <div className={classes.actionButtons}>
            <div className={classes.commentBox}>
              <CommentIcon /> 69 comments
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "3rem auto",
    display: "flex",
    alignItems: "center",
  },
  voteButtons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto 1rem",
    alignItems: "center",
  },
  frontmatter: {
    display: "flex",
    flexDirection: "column",
  },
  routerLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  actionButtons: {
    display: "flex",
  },
  commentBox: {
    display: "flex",
    alignItems: "center",
  },
}));

export default BlogCard;
