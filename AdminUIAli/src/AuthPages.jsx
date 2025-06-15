import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPages = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically set authentication to true
    setIsAuthenticated(true);
    // Navigate to the admin dashboard
    navigate('/dashboard');
  }, [setIsAuthenticated, navigate]);

  return null; // Don't render anything since we're redirecting
};

export default AuthPages;
