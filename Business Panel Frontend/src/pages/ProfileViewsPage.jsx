import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar"; // Reusable Sidebar component
import Header from "../components/Header/Header"; // Reusable Header component
import "./ProfileViewsPage.css";
import "@mui/icons-material"; // Import for Material Icons

const ProfileViewsPage = () => {
  const [timeRange, setTimeRange] = useState("week"); // week, month, year

  const insights = {
    totalViews: "3.2K",
    postEngagement: "1.5K",
    connectionsGrowth: "500",
    profileCompletion: "85%",
    averageTimeSpent: "2m 30s",
    searchAppearances: "1.8K"
  };

  const recentViewers = [
    {
      id: 1,
      name: "Jane Doe",
      title: "Software Engineer",
      location: "New York",
      avatar: "https://ui-avatars.com/api/?name=Jane+Doe&background=2c3e50&color=fff",
      viewedOn: "2 hours ago",
      company: "Tech Corp",
      mutualConnections: 5
    },
    {
      id: 2,
      name: "John Smith",
      title: "Product Manager",
      location: "California",
      avatar: "https://ui-avatars.com/api/?name=John+Smith&background=2c3e50&color=fff",
      viewedOn: "5 hours ago",
      company: "Innovate Inc",
      mutualConnections: 3
    },
    {
      id: 3,
      name: "Emily Johnson",
      title: "Data Scientist",
      location: "Texas",
      avatar: "https://ui-avatars.com/api/?name=Emily+Johnson&background=2c3e50&color=fff",
      viewedOn: "1 day ago",
      company: "DataWorks",
      mutualConnections: 7
    },
    {
      id: 4,
      name: "Michael Brown",
      title: "UX Designer",
      location: "Florida",
      avatar: "https://ui-avatars.com/api/?name=Michael+Brown&background=2c3e50&color=fff",
      viewedOn: "2 days ago",
      company: "DesignHub",
      mutualConnections: 2
    },
    {
      id: 5,
      name: "Sarah Lee",
      title: "Marketing Specialist",
      location: "Illinois",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Lee&background=2c3e50&color=fff",
      viewedOn: "3 days ago",
      company: "MarketPro",
      mutualConnections: 4
    }
  ];

  const searchActivity = {
    queries: ["Tech startups", "Web development trends", "Investment strategies", "AI in finance"],
    locations: ["New York", "California", "Texas", "London", "Berlin"],
    titles: ["Software Engineer", "CEO", "Freelancer", "Investor", "Business Analyst"],
    industries: ["Technology", "Finance", "Healthcare", "Education", "Manufacturing"]
  };

  const postEngagement = [
    {
      id: 1,
      title: "My Journey in Tech: From Idea to Product Launch",
      likes: "1.2K",
      comments: "250",
      shares: "120",
      thumbnail: "https://ui-avatars.com/api/?name=Tech+Journey&background=2c3e50&color=fff&size=150",
      date: "2 days ago",
      reach: "5.2K",
      engagement: "12%"
    },
    {
      id: 2,
      title: "Tips for Coding Interviews: Mastering Data Structures",
      likes: "900",
      comments: "180",
      shares: "90",
      thumbnail: "https://ui-avatars.com/api/?name=Coding+Tips&background=2c3e50&color=fff&size=150",
      date: "4 days ago",
      reach: "4.1K",
      engagement: "9.5%"
    },
    {
      id: 3,
      title: "The Future of Finance: Blockchain and Decentralization",
      likes: "750",
      comments: "150",
      shares: "70",
      thumbnail: "https://ui-avatars.com/api/?name=Future+Finance&background=2c3e50&color=fff&size=150",
      date: "1 week ago",
      reach: "3.8K",
      engagement: "8.2%"
    }
  ];

  const timeRangeOptions = [
    { value: "week", label: "Last 7 Days" },
    { value: "month", label: "Last 30 Days" },
    { value: "year", label: "Last 12 Months" }
  ];

  return (
    <div className="profile-views-page">
      <Sidebar />
      <div className="content">
        <Header />

        <div className="page-header">
          <div className="header-content">
            <div>
              <h1>Profile Insights</h1>
              <p>Understand how people interact with your profile and content.</p>
            </div>
            <div className="time-range-selector">
              {timeRangeOptions.map(option => (
                <button
                  key={option.value}
                  className={`time-range-btn ${timeRange === option.value ? 'active' : ''}`}
                  onClick={() => setTimeRange(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Insights Summary */}
        <section className="insights-summary card-section">
          <h2>
            <span className="material-icons">insights</span>
            Key Metrics
          </h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="material-icons">visibility</span>
              <h3>{insights.totalViews}</h3>
              <p>Total Profile Views</p>
              <span className="trend positive">+12% from last {timeRange}</span>
            </div>
            <div className="stat-card">
              <span className="material-icons">trending_up</span>
              <h3>{insights.postEngagement}</h3>
              <p>Post Engagements</p>
              <span className="trend positive">+8% from last {timeRange}</span>
            </div>
            <div className="stat-card">
              <span className="material-icons">group_add</span>
              <h3>{insights.connectionsGrowth}</h3>
              <p>Connections Growth</p>
              <span className="trend positive">+15% from last {timeRange}</span>
            </div>
            <div className="stat-card">
              <span className="material-icons">assignment</span>
              <h3>{insights.profileCompletion}</h3>
              <p>Profile Completion</p>
              <span className="trend neutral">Complete your profile</span>
            </div>
            <div className="stat-card">
              <span className="material-icons">schedule</span>
              <h3>{insights.averageTimeSpent}</h3>
              <p>Avg. Time Spent</p>
              <span className="trend positive">+20% from last {timeRange}</span>
            </div>
            <div className="stat-card">
              <span className="material-icons">search</span>
              <h3>{insights.searchAppearances}</h3>
              <p>Search Appearances</p>
              <span className="trend positive">+25% from last {timeRange}</span>
            </div>
          </div>
        </section>

        {/* Recent Viewers */}
        <section className="recent-viewers card-section">
          <h2>
            <span className="material-icons">people</span>
            Recent Viewers
          </h2>
          <div className="viewer-list">
            {recentViewers.map((viewer) => (
              <div key={viewer.id} className="viewer-card">
                <img src={viewer.avatar} alt={viewer.name} className="viewer-avatar" />
                <div className="viewer-info">
                  <h3>{viewer.name}</h3>
                  <p className="viewer-title">{viewer.title}</p>
                  <p className="viewer-company">
                    <span className="material-icons">business</span>
                    {viewer.company}
                  </p>
                  <p className="viewer-location">
                    <span className="material-icons location-icon">location_on</span>
                    {viewer.location}
                  </p>
                  <div className="viewer-meta">
                    <p className="viewer-viewed-on">
                      <span className="material-icons">schedule</span>
                      {viewer.viewedOn}
                    </p>
                    <p className="viewer-connections">
                      <span className="material-icons">people</span>
                      {viewer.mutualConnections} mutual connections
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Search Activity */}
        <section className="search-activity card-section">
          <h2>
            <span className="material-icons">analytics</span>
            Search Activity Insights
          </h2>
          <div className="activity-details">
            <div className="activity-card">
              <h4>
                <span className="material-icons">search</span>
                Search Queries
              </h4>
              <ul>
                {searchActivity.queries.map((query, index) => (
                  <li key={index}>
                    <span className="material-icons">arrow_right</span>
                    {query}
                  </li>
                ))}
              </ul>
            </div>
            <div className="activity-card">
              <h4>
                <span className="material-icons">location_on</span>
                Top Locations
              </h4>
              <ul>
                {searchActivity.locations.map((location, index) => (
                  <li key={index}>
                    <span className="material-icons">arrow_right</span>
                    {location}
                  </li>
                ))}
              </ul>
            </div>
            <div className="activity-card">
              <h4>
                <span className="material-icons">work</span>
                Top Job Titles
              </h4>
              <ul>
                {searchActivity.titles.map((title, index) => (
                  <li key={index}>
                    <span className="material-icons">arrow_right</span>
                    {title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="activity-card">
              <h4>
                <span className="material-icons">category</span>
                Top Industries
              </h4>
              <ul>
                {searchActivity.industries.map((industry, index) => (
                  <li key={index}>
                    <span className="material-icons">arrow_right</span>
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Post Engagement */}
        <section className="post-engagement card-section">
          <h2>
            <span className="material-icons">trending_up</span>
            Top-Performing Posts
          </h2>
          <div className="post-list">
            {postEngagement.map((post) => (
              <div key={post.id} className="post-card">
                <img src={post.thumbnail} alt={post.title} className="post-thumbnail" />
                <div className="post-info">
                  <h3>{post.title}</h3>
                  <p className="post-date">
                    <span className="material-icons">schedule</span>
                    {post.date}
                  </p>
                  <div className="post-stats">
                    <p>
                      <span className="material-icons">thumb_up</span>
                      Likes: {post.likes}
                    </p>
                    <p>
                      <span className="material-icons">comment</span>
                      Comments: {post.comments}
                    </p>
                    <p>
                      <span className="material-icons">share</span>
                      Shares: {post.shares}
                    </p>
                  </div>
                  <div className="post-metrics">
                    <p>
                      <span className="material-icons">visibility</span>
                      Reach: {post.reach}
                    </p>
                    <p>
                      <span className="material-icons">insights</span>
                      Engagement: {post.engagement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileViewsPage;
