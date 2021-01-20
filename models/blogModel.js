const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now() },
    upvotes: { type: Number },
    downvotes: { type: Number },
    likedBy: [{ type: String }],
    comments: [
      {
        username: String,
        commentBody: String,
        date: { type: Date, default: Date.now() },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Blogs = mongoose.model("Blogs", blogSchema);

module.exports = Blogs;
