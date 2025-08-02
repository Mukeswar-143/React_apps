// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './registration/Register';
import Login from './login/Login';
import Home from './hom/Home';
import CodeCompiler from './ReactHooks';
function App() {
  const [userData, setUserData] = useState(null);

  
  return (
    <CodeCompiler />
  );
}

export default App;
