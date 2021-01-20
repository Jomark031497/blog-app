import { makeStyles, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux";
import { Link } from "react-router-dom";

const AuthOptions = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  const menuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    dispatch(logoutUser());
    setAnchorEl(null);
  };

  const menuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {user ? (
        <>
          <li className={classes.navlink}>
            <Link to="/add-blog" className={classes.routerLink}>
              Add Blog
            </Link>
          </li>
          <li className={classes.navlink}>
            <p onClick={menuOpen}>user</p>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={menuClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </li>
        </>
      ) : (
        <Link to="/login" className={classes.routerLink}>
          login
        </Link>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  routerLink: {
    textDecoration: "none",
    color: "#efefef",
  },
}));

export default AuthOptions;
