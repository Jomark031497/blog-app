const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    blogs: [{ type: String, default: null }],
    likedBlogs: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Users = model("Users", userSchema);

module.exports = Users;
