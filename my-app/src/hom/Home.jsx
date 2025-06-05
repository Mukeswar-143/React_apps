// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home({ userData, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Clear user data in App.js
    navigate('/login'); // Redirect to login
  };

  return (
    <div>
      <h1>Welcome, {userData?.name}!</h1>
      <p>You have successfully logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
