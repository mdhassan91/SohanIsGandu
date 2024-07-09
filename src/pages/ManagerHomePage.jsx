import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManagerHomePage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Manager Home Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ManagerHomePage;
