import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageStatus, setMessageStatus] = useState(''); // "valid" or "invalid"

  // For real-time password checks:
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [isLongEnough, setIsLongEnough] = useState(false);

  // 1) Email‐validation function
  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    return pattern.test(email);
  };

  // 2) Update each password‐rule boolean on every password change
  useEffect(() => {
    setHasLowercase(/(?=.*[a-z])/.test(password));
    setHasUppercase(/(?=.*[A-Z])/.test(password));
    setHasNumber(/(?=.*\d)/.test(password));
    setHasSymbol(/(?=.*[@$!%*#?&])/.test(password));
    setIsLongEnough(password.length >= 10);
  }, [password]);

  // 3) On form submit, check email + all password rules
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      setMessageStatus('invalid');
      return;
    }

    if (
      !hasLowercase ||
      !hasUppercase ||
      !hasNumber ||
      !hasSymbol ||
      !isLongEnough
    ) {
      setMessage('Password must meet all the requirements listed below.');
      setMessageStatus('invalid');
      return;
    }

    setMessage('Form submitted successfully!');
    setMessageStatus('valid');
  };

  return (
    <div id="container">
      <div id="container1">
        <div id="container2">
        <h1>Registration Form :</h1>

        <form onSubmit={handleSubmit}>
          {/* Name field */}
          <label htmlFor="Name">Name :</label>
          <input type="text" name="Name" id="Name" placeholder='Enter Your Name : ' />
          <br />

          {/* Email field */}
          <label htmlFor="Email">Email :</label>
          <input
            type="text"
            placeholder="example@mail.com"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {message && (
            <p className={messageStatus === 'valid' ? 'valid-message' : 'invalid-message'}>
              {message}
            </p>
          )}
          <br />

          {/* Password field */}
          <label htmlFor="Password">Password :</label>
          <input
            type="password"
            placeholder="Enter a strong password"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />


          <ul className="rules-list">
            <li className={hasLowercase ? 'valid' : 'invalid'}>
              At least one lowercase letter
            </li>
            <li className={hasUppercase ? 'valid' : 'invalid'}>
              At least one uppercase letter
            </li>
            <li className={hasNumber ? 'valid' : 'invalid'}>
              At least one number
            </li>
            <li className={hasSymbol ? 'valid' : 'invalid'}>
              At least one special character (e.g. @, $, %, !)
            </li>
            <li className={isLongEnough ? 'valid' : 'invalid'}>
              Minimum length of 10 characters
            </li>
          </ul>

          <br />
          <button type="submit">Submit</button>
        </form>


      </div>
      </div>
      
    </div>
  );
}
