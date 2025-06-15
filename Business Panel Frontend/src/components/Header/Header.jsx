import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // Add theme switching logic here
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="search-container">
          {/* <span className="material-icons search-icon">search</span> */}
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="header-right">
        <div className="header-actions">
          <button className="action-button">
            <span className="material-icons">notifications</span>
            <span className="notification-badge">3</span>
          </button>
          <button className="action-button">
            <span className="material-icons">email</span>
            <span className="notification-badge">5</span>
          </button>
          <button className="action-button">
            <span className="material-icons">settings</span>
          </button>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkTheme ? "light_mode" : "dark_mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
