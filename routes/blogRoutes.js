const express = require("express");
const router = express.Router();
const {
  showAllBlogs,
  createBlog,
  getBlog,
} = require("../controllers/blogController");
const { requireAuth } = require("../middlewares/auth");

// METHOD: GET
// DESC: GET ALL THE BLOGS
router.get("/", requireAuth, showAllBlogs);

// METHOD: GET
// DESC: GET A SINGLE BLOG
router.get("/:id", getBlog);

// METHOD: POST
// DESC: CREATE A NEW BLOG
router.post("/create", createBlog);

module.exports = router;
