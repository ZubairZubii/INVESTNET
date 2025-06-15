import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/profile", icon: "person", label: "Profile" },
    { path: "/messages", icon: "chat", label: "Messages" },
    { path: "/notifications", icon: "notifications", label: "Notifications" },
    { path: "/investor", icon: "trending_up", label: "Investor" },
    { path: "/posts", icon: "article", label: "Posts" },
    { path: "/payments", icon: "payments", label: "Payments" },
    { path: "/profile-views", icon: "visibility", label: "Profile Views" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          {/* <img src="/investnet.png" alt="InvestNet" className="logo-image" /> */}
          <span>InvestNet</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(item.path);
            }}
          >
            <span className="material-icons nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt="User"
            className="user-avatar"
          />
          <div className="user-info">
            <div className="user-name">John Doe</div>
            <div className="user-role">Business Owner</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
