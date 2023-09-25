import React from 'react';
import "../css/Privacy.css"
import Logo from "../images/logo_pro.png";
import { NavLink } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className='PrivacyPolicy'>
      <nav className="navbar">
        <img src={Logo} alt="User" />
        <ul className='Navbar-list'>
          <li><NavLink to="/about" activeClassName="active">Help</NavLink></li>
          <button><NavLink to="/login" activeClassName="active">Logout</NavLink></button>
        </ul>
      </nav>
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p>
          Welcome to FlashFunds (referred to as "we," "us," or "our"). This Privacy Policy
          explains how we collect, use, and protect your personal information when you
          access or use our online lending platform (the "Service"). By using our Service,
          you agree to the terms of this Privacy Policy.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect various types of information, including but not limited to your
          name, contact information, financial information, and usage data when you use our
          Service.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide and improve our Service, to
          communicate with you, to facilitate lending transactions, and for other legitimate
          business purposes.
        </p>

        <h2>3. Information Sharing</h2>
        <p>
          We may share your information with third parties as necessary to provide our
          Service, comply with legal obligations, or protect our rights and interests.
        </p>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3>flashfunds</h3>
            <p>&copy; {new Date().getFullYear()} flashfunds. All rights reserved.</p>
          </div>
          <div className="footer-center">
            <ul>
              <li><NavLink to="/terms">Terms and Conditions</NavLink></li>
              <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
              <li><NavLink to="/help">Help</NavLink></li>
            </ul>
          </div>
          <div className="footer-right">
  <ul className="social-icons">
    <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
    <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
    <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
  </ul>
</div>
</div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
