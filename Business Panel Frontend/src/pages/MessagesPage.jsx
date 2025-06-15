import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import MessageList from "../components/Messages/MessageList";
import ChatWindow from "../components/Messages/ChatWindow";
import "./MessagesPage.css";

const dummyConversations = [
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    lastMessage: "Looking forward to the meeting!",
    messages: [
      { sender: "John Doe", text: "Hello!" },
      { sender: "You", text: "Hi, how are you?" },
      { sender: "John Doe", text: "Looking forward to the meeting!" },
    ],
  },
  {
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    lastMessage: "Can you share the document?",
    messages: [
      { sender: "Jane Smith", text: "Hey, are you free now?" },
      { sender: "You", text: "Yes, I am." },
      { sender: "Jane Smith", text: "Can you share the document?" },
    ],
  },
  {
    name: "Michael Brown",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    lastMessage: "Received the report, thanks!",
    messages: [
      { sender: "Michael Brown", text: "Hello there!" },
      { sender: "You", text: "Hi, Michael!" },
      { sender: "Michael Brown", text: "Received the report, thanks!" },
    ],
  },
  {
    name: "Emily White",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    lastMessage: "Let's discuss this tomorrow.",
    messages: [
      { sender: "Emily White", text: "Are you available for a quick chat?" },
      { sender: "You", text: "Not right now, maybe later?" },
      { sender: "Emily White", text: "Let's discuss this tomorrow." },
    ],
  },
];

const MessagesPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(0);

  return (
    <div className="messages-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="messages-container">
          <MessageList
            conversations={dummyConversations}
            onSelectConversation={setSelectedConversation}
            selectedConversationIndex={selectedConversation}
          />
          <ChatWindow
            selectedConversation={dummyConversations[selectedConversation]}
          />
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
