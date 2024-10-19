import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css'; // You can create a separate CSS file for styles


function LandingPage() {
  const navigate = useNavigate(); // Hook to navigate between pages
  return (
    <div className="landing-page">
      <div className="stars"></div> {/* Add stars background */}
      
      <header className="navbar">
        <div className="logo">
          <img src="logo-placeholder.png" alt="Logo" />
        </div>
        <div className="auth-buttons">
          <button className="login-btn" onClick={() => navigate('/login')}>Login</button> {/* Navigate to login */}
        </div>
      </header>

      <main className="content">
        <h1>Bridging Abundance to Nourish Communities</h1>
        <p>
          Together, we're not just reducing waste—we're restoring hope, one meal at a time."
        </p>
        <div className="cta-buttons">
          <button className="cta-btn donor-btn" onClick={() => navigate('/registerFP')}>I am a food donor</button>
          <button className="cta-btn consumer-btn" onClick={() => navigate('/registerFC')}>I am a food Consumer</button>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
