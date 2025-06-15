import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header"; // Assuming you have a header component
import Sidebar from "../components/Sidebar/Sidebar"; // Import Sidebar component
import "./Notifications.css"; // Ensure the CSS is properly applied

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulating fetching notifications from an API
    const fetchNotifications = async () => {
      const newNotifications = [
        {
          id: 1,
          type: "comment",
          message: "John commented on your post",
          time: "2 minutes ago",
          icon: "comment",
        },
        {
          id: 2,
          type: "connection_request",
          message: "Sarah sent you a connection request",
          time: "10 minutes ago",
          icon: "person_add",
        },
        {
          id: 3,
          type: "like",
          message: "Mike liked your photo",
          time: "1 hour ago",
          icon: "thumb_up",
        },
        {
          id: 4,
          type: "job_recommendation",
          message: "New job recommendation for you",
          time: "5 hours ago",
          icon: "work",
        },
        {
          id: 5,
          type: "message",
          message: "You have a new message from InvestNet support",
          time: "1 day ago",
          icon: "email",
        },
      ];
      setNotifications(newNotifications);
    };

    fetchNotifications();
  }, []);

  return (
    <div className="notifications-page">
      <Sidebar /> {/* Include Sidebar */}
      <div className="main-content">
        <Header />
        <div className="notifications-wrapper">
          <div className="page-header">
            <h2>Notifications</h2>
            <div className="filter-options">
              <button className="filter-button active">All</button>
              <button className="filter-button">Unread</button>
              <button className="filter-button">Archived</button>
            </div>
          </div>
          <div className="search-bar">
            <span className="material-icons search-icon">search</span>
            <input type="text" placeholder="Search notifications..." />
          </div>
          <div className="notification-list">
            {notifications.map((notification) => (
              <div key={notification.id} className="notification-card">
                <div className="notification-icon-wrapper">
                  <span className="material-icons notification-icon">{notification.icon}</span>
                </div>
                <div className="notification-content">
                  <p className="notification-message">{notification.message}</p>
                  <span className="notification-time">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
