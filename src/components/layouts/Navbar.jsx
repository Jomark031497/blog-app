import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.titlebar}>
        <h1 className={classes.logo}>
          <Link to="/" style={{ textDecoration: "none", color: "#f1356d" }}>
            jmrk.
          </Link>
        </h1>
      </div>

      <ul className={classes.navlinks}>
        <li className={classes.navlink}>
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            Home
          </Link>
        </li>
        <li className={classes.navlink}>
          <span className={classes.newBlogBtn}>
            <Link
              to="/add-blog"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Add Blog
            </Link>
          </span>
        </li>
      </ul>
    </header>
  );
};

const useStyles = makeStyles({
  root: {
    height: "10vh",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
  },
  titlebar: {
    flex: "1",
    margin: "auto 1rem",
  },
  logo: {
    letterSpacing: ".3rem",
    color: "#f1356d",
  },
  navlinks: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    width: "10rem",
    margin: "auto 1rem",
  },
  newBlogBtn: {
    padding: ".5rem",
    borderRadius: ".5rem",
    background: "#f1356d",
    color: "#fff",
  },
});

export default Navbar;
