import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPageFP from './components/RegisterPageFP';
import RegisterPageFC from './components/RegisterPageFC';

function App() {
  return (
    <Router>
    <Routes>
      {/* Define routes for each page */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registerFP" element={<RegisterPageFP />} />
      <Route path="/registerFC" element={<RegisterPageFC />} />
    </Routes>
  </Router>
  );
}

export default App;

