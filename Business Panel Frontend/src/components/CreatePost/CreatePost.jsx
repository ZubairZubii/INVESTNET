import React from "react";
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className="create-post-card">
      <div className="create-post-header">
        <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User Avatar" className="create-post-avatar" />
        <textarea placeholder="What's on your mind?" className="create-post-textarea"></textarea>
      </div>
      <div className="create-post-actions">
        {/* Future actions like image/video upload can go here */}
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
