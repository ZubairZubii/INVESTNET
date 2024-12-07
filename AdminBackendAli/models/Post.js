

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  // Reference to the User model
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",  // Posts are pending approval by default
  },
  flagged: {
    type: Boolean,
    default: false,
  },
  flagReason: {
    type: String,  // Reason for flagging the post
    default: null,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
