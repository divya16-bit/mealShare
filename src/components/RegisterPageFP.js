import React from 'react';
import '../styles/RegisterPageFP.css'; // Create a new CSS file for this page

function RegisterPageFP() {
  return (
    <div className="register-page">
      <header className="navbar">
        <div className="logo">
          <img src="logo-placeholder.png" alt="Logo" /> {/* Placeholder for the logo */}
        </div>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
        </div>
      </header>

      <div className="register-container">
        <div className="register-box">
          <h2>Create your account as Food Provider</h2>
          <form>
            <input type="text" placeholder="Organisation name" className="input-field" />
            <input type="text" placeholder="Contact" className="input-field" />
            <div className="address-container">
              <input type="text" placeholder="Address" className="input-field address" />
              <input type="text" placeholder="Pincode" className="input-field pincode" />
            </div>
            <button type="submit" className="register-btn-form">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPageFP;
