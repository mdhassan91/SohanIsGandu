import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventManagerHomePage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Event Manager Home Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default EventManagerHomePage;
