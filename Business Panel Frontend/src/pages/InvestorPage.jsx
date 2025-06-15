import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar"; // Import Sidebar component
import "./InvestorPage.css"; // Ensure that your styles are correctly applied

const investors = [
  {
    id: 1,
    name: "John Doe",
    description: "Angel investor focused on tech startups.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    description: "Venture capitalist with a passion for innovation.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Alan Turing",
    description: "Investing in AI and machine learning projects.",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    id: 4,
    name: "Bill Gates",
    description: "Philanthropist and tech entrepreneur.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 5,
    name: "Mark Zuckerberg",
    description: "Founder of Facebook and social media pioneer.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 6,
    name: "Elon Musk",
    description: "CEO of Tesla and SpaceX, focused on innovation.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: 7,
    name: "Warren Buffet",
    description: "Investing with a long-term value approach.",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    id: 8,
    name: "Oprah Winfrey",
    description: "Media mogul with diverse investments.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 9,
    name: "Richard Branson",
    description: "Founder of Virgin Group and space tourism advocate.",
    image: "https://randomuser.me/api/portraits/men/80.jpg",
  },
  {
    id: 10,
    name: "Sheryl Sandberg",
    description: "Former Facebook COO and advocate for women in tech.",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
  },
];

const InvestorPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query

  // Filter investors based on the search query
  const filteredInvestors = investors.filter((investor) =>
    investor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="investor-page-container">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Investor Content */}
      <div className="investor-page-content">
        <h2>Investors</h2>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Investor Grid */}
        <div className="investor-grid">
          {filteredInvestors.map((investor) => (
            <div key={investor.id} className="investor-card">
              <img
                src={investor.image}
                alt={`${investor.name}'s profile`}
                className="investor-image"
              />
              <h3>{investor.name}</h3>
              <p>{investor.description}</p>
              <button>View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorPage;
