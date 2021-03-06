const Blogs = require("../models/blogModel");
const Users = require("../models/userModel");

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
    res.status(400).json({ msg: err.message });
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

    await Users.findOneAndUpdate(
      { username: req.body.username },
      {
        $push: { likedBlogs: req.body.id },
      }
    );

    res.json({ msg: "success" });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const commentBlog = async (req, res) => {

  try {
    const commentRes = await Blogs.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $push: {
          comments: {
            username: req.body.username,
            commentBody: req.body.commentBody,
          },
        },
      }
    );

    res.status(200).json(commentRes);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

module.exports = {
  showAllBlogs,
  createBlog,
  getBlog,
  upvoteBlog,
  commentBlog,
};
