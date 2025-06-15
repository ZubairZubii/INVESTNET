import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar"; // Your existing Sidebar
import Header from "../components/Header/Header"; // Your existing Header
import Post from "../components/Post/Post";
import CreatePost from "../components/CreatePost/CreatePost";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import "./FeedPage.css";

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState({
    date: "All",
    type: "All",
  });

  useEffect(() => {
    // Fetch posts or use mock data
    const fetchPosts = async () => {
      const fetchedPosts = [
        {
          id: 1,
          author: "John Doe",
          authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
          content: "Excited to announce our new funding round for InvestNet! This will help us expand our reach and connect more startups with investors. #InvestNet #Funding #Startups",
          image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
          likes: 120,
          comments: 50,
          shares: 10,
          timestamp: "2 hours ago",
        },
        {
          id: 2,
          author: "Jane Smith",
          authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
          content: "Just wrapped up a productive meeting with potential investors. The future is bright for innovative projects! #VentureCapital #Innovation",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
          likes: 240,
          comments: 80,
          shares: 25,
          timestamp: "1 day ago",
        },
        {
          id: 3,
          author: "Michael Brown",
          authorAvatar: "https://randomuser.me/api/portraits/men/47.jpg",
          content: "Exploring new opportunities in sustainable tech. Let's build a better future together. #SustainableTech #FutureIsNow",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4cd085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
          likes: 300,
          comments: 100,
          shares: 30,
          timestamp: "3 days ago",
        },
        {
          id: 4,
          author: "Emily White",
          authorAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
          content: "Proud to see our portfolio companies making significant strides in their respective markets. Hard work pays off! #SuccessStories #Investments",
          image: "https://images.unsplash.com/photo-1543269865-cbf427fdce8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
          likes: 180,
          comments: 65,
          shares: 18,
          timestamp: "5 days ago",
        },
      ];
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, [filters]);

  return (
    <div className="feed-page">
      <Sidebar /> {/* Existing Sidebar */}
      <div className="feed-content">
        <Header /> {/* Existing Header */}
        <div className="feed-main">
          <FilterPanel setFilters={setFilters} />
          <CreatePost />
          <div className="post-feed">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
