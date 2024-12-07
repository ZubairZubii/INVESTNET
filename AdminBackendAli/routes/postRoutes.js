const express = require("express");
const {
  createPost,
  getAllPosts,
  approvePost,
  rejectPost,
  flagPost,
  removeFlaggedPost,
} = require("../controllers/postController");

const router = express.Router();

// Route to create a new post
router.post("/", createPost);

// Route to get all posts (can be filtered by status)
router.get("/", getAllPosts);

// Route to approve a post
router.put("/:id/approve", approvePost);

// Route to reject a post
router.put("/:id/reject", rejectPost);

// Route to flag a post
router.put("/:id/flag", flagPost);

// Route to remove flagged post
router.delete("/:id/remove", removeFlaggedPost);

module.exports = router;
