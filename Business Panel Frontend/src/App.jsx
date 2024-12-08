import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import MessagesPage from "./pages/MessagesPage";
import InvestorPage from "./pages/InvestorPage";
import Notifications from "./pages/Notifications";
import FeedPage from "./pages/FeedPage"; // Import FeedPage
import PaymentsPage from "./pages/PaymentsPage";
import ProfileViewsPage from "./pages/ProfileViewsPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/investor" element={<InvestorPage />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/posts" element={<FeedPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/profile-views" element={<ProfileViewsPage />} />

          {/* Add Settings Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
