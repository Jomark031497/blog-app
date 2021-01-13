const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const maxAge = 60 * 60 * 24;

const createToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: maxAge,
    }
  );
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
    res.cookie("jwt", token, { maxAge: maxAge * 1000 });
    res.status(200).json({ user: createdUser._id });
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
      return res.status(400).json({ msg: "invalid password" });

    // create token
    const token = createToken(user._id);
    res.cookie("jwt", token, { maxAge: maxAge * 1000 });

    res.status(200).json({
      user: {
        id: user.id,
      },
    });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const verifyToken = async (req, res) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await Users.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const logoutUser = (req,res) => {
  try {
    res.json({ msg: "cookies cleared" }).clearCookie("jwt");
  } catch (err) {
    res.status(400).json({ msg: err });
  }
}
module.exports = {
  registerUser,
  loginUser,
  verifyToken,
  logoutUser
};
