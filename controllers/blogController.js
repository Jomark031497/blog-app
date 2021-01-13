const Blogs = require("../models/blogModel");

const showAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find().sort([["createdAt", -1]]);
    res.json(blogs);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const getBlog = async(req,res) => {

  try{
    const blog = await Blogs.findById(req.params.id);
    res.json(blog);
  }
  catch(err){
    res.status(400).json({ msg: err });
  }
}

const createBlog = async (req, res) => {
  try {
    const { title, author, content } = req.body;

    const newBlog = new Blogs({
      title,
      author,
      content,
    });

    const saveBlog = await newBlog.save();
    res.json(saveBlog);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

module.exports = {
  showAllBlogs,
  createBlog,
  getBlog
};
