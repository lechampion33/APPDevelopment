import React from 'react'
import "../css/Help.css"
import Logo from "../images/logo_pro.png";
import { NavLink } from 'react-router-dom';
function Help() {
  return (
    <div className='Help'>
      <nav className="navbar">
        <img src={Logo} alt="User" />
        <ul className='Navbar-list'>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <button><NavLink to="/login" activeClassName="active">Logout</NavLink></button>
        </ul>
      </nav>
      <div className="help-content">
        <h1>Help Center</h1>
        <p>
          Welcome to FlashFunds' Help Center. We are here to assist you with any questions
          or concerns you may have regarding our online lending platform.
        </p>

        <h2>Getting Started</h2>
        <p>
          If you are new to FlashFunds, you can start by creating an account and exploring
          the available features on our platform.
        </p>

        <h2>Frequently Asked Questions (FAQs)</h2>
        <p>
          We have compiled a list of frequently asked questions to provide answers to
          common queries. Please check our <NavLink to="/faq" activeClassName="active">FAQ page</NavLink>.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you cannot find the information you need in our Help Center or FAQ, please
          feel free to contact us.
          Our support team will be happy to assist you.
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
  )
}

export default Help
