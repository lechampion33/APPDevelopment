import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import Logo from "../images/logo_pro.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../css/Verify.css"
function Verify() {
    const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const sendOtp = () => {
    if (email) {
      const randomOtp = Math.floor(1000 + Math.random() * 9000);
      toast.success(`OTP sent to ${email}: ${randomOtp}`);
    } else {
      toast.error('Please enter a valid email.');
    }
  };

  const handleSubmit = () => {
    if (otp) {
      toast.success('OTP verified successfully!');
    } else {
      toast.error('Please enter a valid OTP.');
    }
  };
  return (
    <div className='verify'>
      <nav className="navbar">
      <img src={Logo} alt="User" />
        <ul className='Navbar-list'>
          <li><NavLink exact to="/lenders" activeClassName="active">Lenders</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <button><NavLink to="/login" activeClassName="active">Logout</NavLink></button>
        </ul>
      </nav>
      <div className="valid">
      <h1>Email Verification</h1>
      <div className="verification">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={sendOtp}>Send OTP</button>
      </div>
      <div className="verification">
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={handleOtpChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <ToastContainer />
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

export default Verify
