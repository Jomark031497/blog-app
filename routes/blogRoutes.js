const express = require("express");
const router = express.Router();
const { showAllBlogs, createBlog, getBlog } =  require("../controllers/blogController");
const { requireAuth } = require("../middlewares/authMiddleware");

// METHOD: GET
// DESC: GET ALL THE BLOGS
// ACCESS: PRIVATE
router.get("/", requireAuth, showAllBlogs);

// METHOD: GET
// DESC: GET A SINGLE BLOG
// ACCESS: PRIVATE
router.get("/:id", getBlog);

// METHOD: POST
// DESC: CREATE A NEW BLOG
// ACCESS: PRIVATE
router.post("/create", createBlog);


module.exports = router;
