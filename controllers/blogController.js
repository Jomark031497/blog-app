const mongoose = require("mongoose");
const Blogs = require("../models/blogModel");

const showAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find().sort([["createdAt", -1]]);
    res.json(blogs);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const getBlog = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, author, content } = req.body;

    const newBlog = new Blogs({
      title,
      author,
      content,
      upvotes: 0,
      downvotes: 0,
    });

    const saveBlog = await newBlog.save();
    res.json(saveBlog);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const upvoteBlog = async (req, res) => {
  try {
    await Blogs.findOneAndUpdate(
      { _id: req.body.id },
      {
        $inc: { upvotes: 1 },
      }
    );

    res.json({ msg: "success" });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

module.exports = {
  showAllBlogs,
  createBlog,
  getBlog,
  upvoteBlog,
};
