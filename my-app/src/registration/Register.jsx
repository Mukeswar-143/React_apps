// Register.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
export default function Register({ onSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageStatus, setMessageStatus] = useState('');

  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [isLongEnough, setIsLongEnough] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(email);

  useEffect(() => {
    setHasLowercase(/(?=.*[a-z])/.test(password));
    setHasUppercase(/(?=.*[A-Z])/.test(password));
    setHasNumber(/(?=.*\d)/.test(password));
    setHasSymbol(/(?=.*[@$!%*#?&])/.test(password));
    setIsLongEnough(password.length >= 10);
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      setMessageStatus('invalid-message');
      return;
    }

    if (!hasLowercase || !hasUppercase || !hasNumber || !hasSymbol || !isLongEnough) {
      setMessage('Password must meet all the requirements listed below.');
      setMessageStatus('invalid-message');
      return;
    }

    setMessage('Form submitted successfully!');
    setMessageStatus('valid-message');

    onSuccess({ name, email, password }); // Pass data to App.js
    navigate('/login');
  };

  return (
    <div id="container">
      <div id="container1">
        <div id="container2">
          <h1>Registration Form :</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Name">Name :</label>
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <label htmlFor="Email">Email :</label>
            <input
              type="text"
              placeholder="example@mail.com"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label htmlFor="Password">Password :</label>
            <input
              type="password"
              placeholder="Enter a strong password"
              name="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <ul className="rules-list">
              <li className={hasLowercase ? 'valid' : 'invalid'}>At least one lowercase letter</li>
              <li className={hasUppercase ? 'valid' : 'invalid'}>At least one uppercase letter</li>
              <li className={hasNumber ? 'valid' : 'invalid'}>At least one number</li>
              <li className={hasSymbol ? 'valid' : 'invalid'}>At least one special character</li>
              <li className={isLongEnough ? 'valid' : 'invalid'}>Minimum 10 characters</li>
            </ul>

            {message && <p className={messageStatus}>{message}</p>}

            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
