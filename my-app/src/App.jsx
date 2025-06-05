// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './registration/Register';
import Login from './login/Login';
import Home from './hom/Home';
function App() {
  const [userData, setUserData] = useState(null);

  const handleLogout = () => {
    setUserData(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register onSuccess={setUserData} />} />
        <Route path="/login" element={<Login userData={userData} />} />
        <Route
          path="/home"
          element={
            userData ? (
              <Home userData={userData} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
