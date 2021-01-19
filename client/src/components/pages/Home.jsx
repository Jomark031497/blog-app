import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlogs } from "../../redux";
import { Typography } from "@material-ui/core";

const Home = () => {
  const classes = useStyles();

  const blogs = useSelector((state) => state.fetchBlogs.blogs);
  const user = useSelector((state) => state.userLogin.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchBlogs());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, user]);

  return (
    <div className={classes.root}>
      <div className={classes.blogs}>
        {blogs.length ? (
          blogs.map((blog) => (
            <div className={classes.blogCard} key={blog._id}>
              <Typography variant="h5" className={classes.blogTitle}>
                <Link to={`${blog._id}`} className={classes.routerLink}>
                  {blog.title}
                </Link>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Written by {blog.author}
              </Typography>
            </div>
          ))
        ) : (
          <div>
            <Typography variant="h5">No blogs yet! </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "90vh",
  },
  blogs: {
    padding: "1rem 3rem",
  },
  blogCard: {
    margin: "3rem auto",
  },
  routerLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));

export default Home;
