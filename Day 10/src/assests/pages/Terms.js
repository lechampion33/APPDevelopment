import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../images/logo_pro.png"
import "../css/Terms.css"
function Terms() {
  return (
    <div className='Terms'>
      <nav className="navbar">
      <img src={Logo} alt="User" />
        <ul className='Navbar-list'>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <button><NavLink to="/login" activeClassName="active">Logout</NavLink></button>
        </ul>
      </nav>
      <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <div className="term">
        <h2>1. Introduction</h2>
        <p>
          Welcome to [Your Company Name] (referred to as "we," "us," or "our").
          By accessing or using our online lending platform (the "Service"), you
          agree to comply with and be bound by these Terms and Conditions. If you
          do not agree to these terms, please do not use our Service.
        </p>
      </div>

      <div className="term">
        <h2>2. Eligibility</h2>
        <p>
          You must be at least 18 years old and have the legal capacity to enter
          into a contract to use our Service.
        </p>
      </div>

      <div className="term">
        <h2>3. User Accounts</h2>
        <p>
          a. You are responsible for maintaining the confidentiality of your account
          credentials (username and password) and for all activities that occur under
          your account.
        </p>
        <p>
          b. You must provide accurate and up-to-date information when creating your account.
        </p>
        <p>
          c. You agree to notify us immediately of any unauthorized use of your account
          or any other breach of security.
        </p>
      </div>

      <div className="term">
        <h2>4. Lending</h2>
        <p>
          a. Our Service facilitates lending transactions between lenders and borrowers.
          We do not provide loans ourselves.
        </p>
        <p>
          b. Lenders and borrowers are responsible for evaluating each other and entering
          into lending agreements.
        </p>
        <p>
          c. We do not guarantee the performance of any loans or the repayment of any debts.
          Lenders and borrowers assume all risks.
        </p>
      </div>

      <div className="term">
        <h2>5. Privacy Policy</h2>
        <p>
          By using our Service, you agree to our Privacy Policy, which outlines how we
          collect, use, and share your personal information.
        </p>
      </div>

      <div className="term">
        <h2>6. Intellectual Property</h2>
        <p>
          a. Our website and its content are protected by copyright, trademark, and other
          intellectual property laws. You may not copy, reproduce, or distribute our content
          without our written consent.
        </p>
        <p>
          b. You grant us a non-exclusive, worldwide, royalty-free license to use, reproduce,
          and display any content you submit to our Service.
        </p>
      </div>

      <div className="term">
        <h2>7. Disclaimer of Warranties</h2>
        <p>
          We provide our Service "as is" and without any warranties, express or implied.
          We do not guarantee the accuracy or reliability of the information on our platform.
        </p>
      </div>

      <div className="term">
        <h2>8. Limitation of Liability</h2>
        <p>
          We are not liable for any direct, indirect, incidental, consequential, or punitive
          damages arising from your use of our Service.
        </p>
      </div>

      <div className="term">
        <h2>9. Governing Law</h2>
        <p>
          These Terms and Conditions are governed by the laws of [Your Jurisdiction].
        </p>
      </div>

      <div className="term">
        <h2>10. Changes to Terms and Conditions</h2>
        <p>
          We may update these Terms and Conditions from time to time. Any changes will be
          posted on our website, and your continued use of the Service will constitute
          your acceptance of the revised terms.
        </p>
      </div>

      <div className="term">
        <h2>11. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms and Conditions, please
          contact us at flashfunds@gmail.com.
        </p>
      </div>
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

export default Terms
