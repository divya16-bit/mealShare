import React from 'react';
import '../styles/LoginPage.css'; // Create a new CSS file for styling

function LoginPage() {
  return (
    <div className="login-page">
      <header className="navbar">
        <div className="logo">
          <img src="logo-placeholder.png" alt="Logo" /> {/* Placeholder for the logo */}
        </div>
        <div className="auth-buttons">
          <button className="login-btn">???</button>
        </div>
      </header>

      <div className="login-container">
        <div className="login-box">
          <h2>Sign in to your account</h2>
          <form>
            <input type="text" placeholder="Username" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <button type="submit" className="sign-in-btn">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
