import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import './App.css';
import AdminDashboard from './AdminDashboard';
import AuthPages from './AuthPages';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={isAuthenticated ? <AdminDashboard /> : <AuthPages setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/" element={<AuthPages setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
