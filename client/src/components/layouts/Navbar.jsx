import { AppBar, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutUser } from "../../redux";

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector((state) => state.userLogin.userInfo);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    dispatch(logoutUser());
    setAnchorEl(null);
    history.push("/login");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <>
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

            <li className={classes.navlink}>
              <span className={classes.newBlogBtn}>
                <Link to="/add-blog" className={classes.routerLink}>
                  Add Blog
                </Link>
              </span>
            </li>

            {user && user ? (
              <li className={classes.navlink}>
                <>
                  <p onClick={handleClick}>{user.username}</p>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              </li>
            ) : (
              <li className={classes.navlink}>
                <Link to="/login" className={classes.routerLink}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </Toolbar>
      </AppBar>
    </>
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
  newBlogBtn: {
    padding: ".5rem",
    borderRadius: ".5rem",
  },
  routerLink: {
    textDecoration: "none",
    color: "#efefef",
  },
}));

export default Navbar;
