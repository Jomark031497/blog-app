const express = require("express");
const router = express.Router();
const {
  showAllBlogs,
  createBlog,
  getBlog,
  upvoteBlog,
} = require("../controllers/blogController");
const { requireAuth } = require("../middlewares/auth");

// METHOD: GET
// DESC: GET ALL THE BLOGS
router.get("/", requireAuth, showAllBlogs);

// METHOD: GET
// DESC: GET A SINGLE BLOG
router.get("/:id", requireAuth, getBlog);

// METHOD: POST
// DESC: CREATE A NEW BLOG
router.post("/create", requireAuth, createBlog);

router.put("/upvote", requireAuth, upvoteBlog);

module.exports = router;
