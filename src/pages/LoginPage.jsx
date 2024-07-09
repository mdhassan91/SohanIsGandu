import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (credentials) => {
    // Simulate an API call with dummy data
    const dummyUsers = [
      { username: 'user', password: 'userpass', role: 'user' },
      { username: 'manager', password: 'managerpass', role: 'manager' },
      { username: 'movieseller', password: 'moviesellerpass', role: 'movie-seller' },
      { username: 'eventmanager', password: 'eventmanagerpass', role: 'event-manager' },
      { username: 'superadmin', password: 'superadminpass', role: 'super-admin' },
    ];

    const user = dummyUsers.find(
      (u) => u.username === credentials.username && u.password === credentials.password
    );

    if (user) {
      onLogin(user.role); // Optionally set role in parent component if needed
      navigate(
        user.role === 'user' ? '/user-home' :
        user.role === 'manager' ? '/manager-home' :
        user.role === 'movie-seller' ? '/movie-seller-home' :
        user.role === 'event-manager' ? '/event-manager-home' :
        user.role === 'super-admin' ? '/super-admin-home' :
        '/login'
      );
    } else {
      alert('Invalid credentials');
    }
  };

  return <AuthForm isSignup={false} onSubmit={handleLogin} />;
};

export default LoginPage;
