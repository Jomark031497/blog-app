import { makeStyles, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux";
import { Link } from "react-router-dom";

const AuthOptions = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log(user);

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
          <p onClick={menuOpen}>user</p>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={menuClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
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
