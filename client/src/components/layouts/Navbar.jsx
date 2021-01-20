import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthOptions from "./AuthOptions";

const Navbar = () => {
  const classes = useStyles();

  const loggedUser = useSelector((state) => state.userLogin.userInfo);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const data = loggedUser ? loggedUser : "";
    setCurrentUser(data);
  }, [loggedUser, currentUser]);

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <div className={classes.titlebar}>
          <Link to="/" className={classes.routerLink}>
            <Typography
              variant="h4"
              className={classes.logo}
              color="textSecondary"
            >
              jmrk.
            </Typography>
          </Link>
        </div>

        <ul className={classes.navlinks}>
          <li className={classes.navlink}>
            <Link to="/" className={classes.routerLink}>
              Home
            </Link>
          </li>

          <AuthOptions user={currentUser} />
        </ul>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "10vh",
    color: "#fff",
  },
  titlebar: {
    flex: "1",
    margin: "auto 1rem",
  },
  logo: {
    letterSpacing: ".3rem",
    color: "#efefef",
  },
  navlinks: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    width: "40%",
    margin: "auto 1rem",
    alignItems: "center",
  },
  routerLink: {
    textDecoration: "none",
    color: "#efefef",
  },
}));

export default Navbar;
