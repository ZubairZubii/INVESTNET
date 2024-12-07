const Post = require("../models/Post");

// Create a new post
const createPost = async (req, res) => {
  try {
    const { userId, content } = req.body;

    // Create a new post
    const newPost = new Post({
      userId,
      content,
    });

    // Save the post to the database
    await newPost.save();
    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all posts (with filtering for status)
const getAllPosts = async (req, res) => {
  try {
    const { status } = req.query;  // Filter by status (Pending, Approved, Rejected)

    const filter = status ? { status } : {};
    const posts = await Post.find(filter).populate('userId', 'name email');  // Populate user details

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err.message });
  }
};

// Approve a post
const approvePost = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findByIdAndUpdate(postId, { status: "Approved" }, { new: true });
    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ message: "Post approved successfully", post });
  } catch (err) {
    res.status(500).json({ message: "Error approving post", error: err.message });
  }
};

// Reject a post
const rejectPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findByIdAndUpdate(postId, { status: "Rejected" }, { new: true });
    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ message: "Post rejected successfully", post });
  } catch (err) {
    res.status(500).json({ message: "Error rejecting post", error: err.message });
  }
};

// Flag a post as inappropriate
const flagPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { reason } = req.body;

    const post = await Post.findByIdAndUpdate(postId, { flagged: true, flagReason: reason }, { new: true });
    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ message: "Post flagged successfully", post });
  } catch (err) {
    res.status(500).json({ message: "Error flagging post", error: err.message });
  }
};

// Remove flagged posts
const removeFlaggedPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findByIdAndDelete(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ message: "Flagged post removed successfully", post });
  } catch (err) {
    res.status(500).json({ message: "Error removing flagged post", error: err.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  approvePost,
  rejectPost,
  flagPost,
  removeFlaggedPost,
};
