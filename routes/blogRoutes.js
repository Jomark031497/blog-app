const express = require("express");
const router = express.Router();
const {
  showAllBlogs,
  createBlog,
  getBlog,
  upvoteBlog,
  commentBlog,
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

// METHOD: PUT
// DESC: UPVOTE A BLOG
router.put("/upvote", requireAuth, upvoteBlog);

// METHOD: POST
// DESC: UPVOTE A BLOG
router.put("/comment/:id", requireAuth, commentBlog);

module.exports = router;
