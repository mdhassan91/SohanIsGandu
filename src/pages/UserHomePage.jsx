import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserHomePage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div>
      <h2>User Home Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserHomePage;
