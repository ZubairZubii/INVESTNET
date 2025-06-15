import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import "./ProfilePage.css";

const ProfilePage = () => {
  const profileData = {
    name: "Robert Downey Jr.",
    title: "IT Business Owner",
    company: "InvestNet",
    location: "New York, USA",
    about: "A product-based startup named InvestNet with core purposes of providing a platform where startups and investors can meet each other. We focus on creating meaningful connections and fostering innovation in the tech industry.",
    stats: {
      connections: "1.2k",
      posts: "45",
      views: "3.5k",
    },
    skills: [
      "Business Development",
      "Startup Management",
      "Investment Strategy",
      "Tech Innovation",
      "Team Leadership",
      "Market Analysis",
    ],
    recentActivity: [
      {
        id: 1,
        type: "post",
        title: "Shared a new investment opportunity",
        time: "2 hours ago",
      },
      {
        id: 2,
        type: "connection",
        title: "Connected with 5 new investors",
        time: "1 day ago",
      },
      {
        id: 3,
        type: "update",
        title: "Updated company profile",
        time: "3 days ago",
      },
    ],
  };

  return (
    <div className="profile-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        
        <div className="profile-container">
          <div className="profile-header">
            <div className="cover-photo-container">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Cover"
                className="cover-photo"
              />
            </div>
            <div className="profile-info">
              <div className="profile-avatar-container">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Profile"
                  className="profile-avatar"
                />
              </div>
              <div className="profile-details">
                <h1 className="profile-name">{profileData.name}</h1>
                <p className="profile-title">{profileData.title} at {profileData.company}</p>
                <p className="profile-location">{profileData.location}</p>
                
                <div className="profile-stats">
                  <div className="stat-item">
                    <div className="stat-value">{profileData.stats.connections}</div>
                    <div className="stat-label">Connections</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">{profileData.stats.posts}</div>
                    <div className="stat-label">Posts</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">{profileData.stats.views}</div>
                    <div className="stat-label">Profile Views</div>
                  </div>
                </div>

                <div className="profile-actions">
                  <button className="btn btn-primary">Edit Profile</button>
                  <button className="btn btn-secondary">Share Profile</button>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-content">
            <div className="content-main">
              <div className="content-section about-section">
                <h2 className="section-title">About</h2>
                <p className="about-text">{profileData.about}</p>
              </div>

              <div className="content-section skills-section">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="skills-list">
                  {profileData.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="content-section activity-section">
                <h2 className="section-title">Recent Activity</h2>
                {profileData.recentActivity.map((activity) => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-content">
                      <div className="activity-title">{activity.title}</div>
                      <div className="activity-time">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
