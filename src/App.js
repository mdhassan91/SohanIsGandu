import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserHomePage from './pages/UserHomePage';
import ManagerHomePage from './pages/ManagerHomePage';
import MovieSellerHomePage from './pages/MovieSellerHomePage';
import EventManagerHomePage from './pages/EventManagerHomePage';
import SuperAdminHomePage from './pages/SuperAdminHomePage';

const App = () => {
  const [role, setRole] = useState('');

  const handleLogin = (userRole) => {
    console.log('Setting role to:', userRole); // Debugging line
    setRole(userRole);
  };

  const handleSignup = (userRole) => {
    console.log('Setting role to:', userRole); // Debugging line
    setRole(userRole);
  };

  const handleLogout = () => {
    setRole('');
  };

  const PrivateRoute = ({ children, allowedRole }) => {
    return role === allowedRole ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupPage onSignup={handleSignup} />} />
        <Route path="/" element={<Navigate to="/login" />} />

        <Route element={<PrivateRoute allowedRole="user"><Outlet /></PrivateRoute>}>
          <Route path="/user-home" element={<UserHomePage onLogout={handleLogout} />} />
        </Route>

        <Route element={<PrivateRoute allowedRole="manager"><Outlet /></PrivateRoute>}>
          <Route path="/manager-home" element={<ManagerHomePage onLogout={handleLogout} />} />
        </Route>

        <Route element={<PrivateRoute allowedRole="movie-seller"><Outlet /></PrivateRoute>}>
          <Route path="/movie-seller-home" element={<MovieSellerHomePage onLogout={handleLogout} />} />
        </Route>

        <Route element={<PrivateRoute allowedRole="event-manager"><Outlet /></PrivateRoute>}>
          <Route path="/event-manager-home" element={<EventManagerHomePage onLogout={handleLogout} />} />
        </Route>

        <Route element={<PrivateRoute allowedRole="super-admin"><Outlet /></PrivateRoute>}>
          <Route path="/super-admin-home" element={<SuperAdminHomePage onLogout={handleLogout} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
