const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const maxAge = 60 * 60 * 24;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await Users.findOne({ username });

    if (userExists)
      return res.status(400).json({ msg: "Username already taken" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Users({
      username,
      email,
      password: hashedPassword,
    });

    const createdUser = await newUser.save();

    const token = createToken(createdUser._id);
    res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });
    res
      .status(200)
      .json({ user: { id: createdUser._id, username: createdUser.username } });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // find user to database
    const user = await Users.findOne({ username });

    // check if user exists
    if (!user)
      return res.status(400).json({ msg: `invalid username/password` });

    // decrypt password
    const decryptPassword = await bcrypt.compare(password, user.password);

    // check if password match
    if (!decryptPassword)
      return res.status(400).json({ msg: `invalid username/password` });

    // create token
    const token = createToken(user._id);
    res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });

    res.status(200).json({
      user: {
        id: user._id,
        username: user.username,
        likedBlogs: user.likedBlogs,
      },
    });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const logoutUser = (req, res) => {
  try {
    res.clearCookie("jwt").json({ msg: req.cookies.jwt });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const isTokenValid = async (req, res) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const verifiedUser = await Users.findById(verified.id);
    if (!verifiedUser) return res.json(false);

    return res.json({
      user: {
        id: verifiedUser.id,
        username: verifiedUser.username,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  isTokenValid,
};
