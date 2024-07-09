import React, { useState } from 'react';

const AuthForm = ({ isSignup, onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password})
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
    </form>
  );
};

export default AuthForm;
