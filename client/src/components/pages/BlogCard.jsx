import { makeStyles } from "@material-ui/styles";
import { IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ThumbUp from "@material-ui/icons/ThumbUpAlt";
import ThumbDown from "@material-ui/icons/ThumbDown";
import CommentIcon from "@material-ui/icons/Comment";
import { upvoteBlog } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
const BlogCard = ({ blog }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const calculateVotes = (up, down) => {
    return parseInt(up) - parseInt(down);
  };
  const loggedUser = useSelector((state) => state.userLogin.userInfo);

  const handleUpvote = (e) => {
    dispatch(upvoteBlog(e.currentTarget.parentNode.id, loggedUser.username));
  };

  const handleDownvote = (e) => {
    console.log(e.currentTarget.parentNode.id);
  };

  return (
    <>
      <div className={classes.root} key={blog._id}>
        <div className={classes.voteButtons} id={blog._id}>
          <IconButton onClick={handleUpvote}>
            <ThumbUp />
          </IconButton>
          <div>{calculateVotes(blog.upvotes, blog.downvotes)}</div>
          <IconButton onClick={handleDownvote}>
            <ThumbDown />
          </IconButton>
        </div>
        <div className={classes.frontmatter}>
          <Typography variant="h5" className={classes.blogTitle}>
            <Link to={`${blog._id}`} className={classes.routerLink}>
              {blog.title}
            </Link>
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            posted by {blog.author} - {moment(blog.createdAt).fromNow()}
          </Typography>
          <div className={classes.actionButtons}>
            <div className={classes.commentBox}>
              <CommentIcon /> <Typography variant="body2">69 comments</Typography>
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
