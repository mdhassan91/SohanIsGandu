import React from 'react';
import AuthForm from '../components/AuthForm';

const SignupPage = ({ onSignup }) => {
//   const handleSignup = async (credentials) => {
//     // Call your API to signup
//     const response = await fetch('/api/signup', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(credentials),
//     });

//     const data = await response.json();
//     onSignup(data.role);
//   };

const handleSignup = (credentials) => {
    // Simulate an API call with dummy data
    const newUser = { username: credentials.username, password: credentials.password, role: 'user' }; // Default role as user
    onSignup(newUser.role);
  };

  return <AuthForm isSignup={true} onSubmit={handleSignup} />;
};

export default SignupPage;
