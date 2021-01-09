import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { BlogContext } from "../../context/blogContext";
import { Link } from "react-router-dom";

const Home = () => {
  const classes = useStyles();

  const { blogs } = useContext(BlogContext);

  return (
    <div className={classes.root}>
      <div className={classes.blogs}>
        {blogs.length ? (
          blogs.map((blog) => (
            <div className={classes.blogCard} key={blog.id}>
              <h2
                className={classes.blogTitle}
                onClick={() => console.log(blog.id)}
              >
                <Link to={`${blog.id}`} className={classes.routerLink}>
                  {blog.title}
                </Link>
              </h2>
              <p>Written by {blog.author}</p>
            </div>
          ))
        ) : (
          <div>
            <p>No blogs yet! </p>
          </div>
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    minHeight: "90vh",
    padding: "5rem",
  },
  blogCard: {
    marginBottom: "3rem",
  },
  routerLink: {
    textDecoration: "none",
    color: "#f1356d",
  },
});
export default Home;