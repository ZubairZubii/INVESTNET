import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="author-info">
          <img
            src={post.authorAvatar}
            alt="Author"
            className="author-pic"
          />
          <span className="author-name">{post.author}</span>
          <span className="post-time">{post.timestamp}</span>
        </div>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
        {post.image && <img src={post.image} alt="Post content" className="post-image" />}
      </div>
      <div className="post-actions">
        <span className="action-item">
          <span className="material-icons">thumb_up</span> {post.likes} Likes
        </span>
        <span className="action-item">
          <span className="material-icons">comment</span> {post.comments} Comments
        </span>
        <span className="action-item">
          <span className="material-icons">share</span> {post.shares} Shares
        </span>
      </div>
    </div>
  );
};

export default Post;
