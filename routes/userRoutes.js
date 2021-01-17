const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser, isTokenValid } = require("../controllers/userController");

// METHOD:  POST
// DESC:    REGISTER A NEW USER
router.post("/register", registerUser);

// METHOD:  POST
// DESC:    LOGIN A USER
router.post("/login", loginUser);

// METHOD: GET
// DESC: LOGOUT USER (CLEAR COOKIE VALUE)
router.get("/logout", logoutUser);

router.get("/isTokenValid", isTokenValid);


module.exports = router;
