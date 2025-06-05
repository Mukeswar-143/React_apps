// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ userData }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMsg, setLoginMsg] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (userData && email === userData.email && password === userData.password) {
      setLoginMsg('Login successful!');
      console.log('Login done');
      navigate('/home');
    } else {
      setLoginMsg('Invalid email or password.');
      console.log('Login not done');
    }
  };

  return (
    <div id="container">
      <div id="container1">
        <div id="container2">
          <h1>Login Page</h1>
          <form onSubmit={handleLogin}>
            <label>Email :</label>
            <input
              type="text"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password :</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Login</button>

            {loginMsg && (
              <p className={loginMsg.includes('successful') ? 'valid-message' : 'invalid-message'}>
                {loginMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
