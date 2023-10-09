import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; 
import '../css/Signup.css';
import ImageL from '../images/poster.jpg';
import Register from '../gifs/register.gif';
import Logo from '../images/logo_pro.png';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  const handleRegister = () => {
    if (password.length < 8) {
      toast.error('Password should have at least 8 characters.');
      return;
    }

    if (!isValidEmail(email)) {
      toast.error('Invalid email format.');
      return;
    }

    if (mobile.length !== 10) {
      toast.error('Mobile number should have 10 characters.');
      return;
    }

    // Send the registration data to the backend
    axios
      .post('http://localhost:8080/api/v1/auth/signup', {
        name,
        email,
        password,
        mobilenumber: mobile,
      })
      .then((response) => {
        toast.success('Registration successful!');
        navigate('/borrower');
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          toast.error(error.response.data.message);
        } else {
          toast.error('An error occurred while registering.');
        }
      });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="register">
      <nav className="navbar">
        <img src={Logo} alt="User" />
        <ul className="Navbar-list">
          <li>
            <NavLink to="/about" activeClassName="active">
              Verify
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" activeClassName="active">
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="signup-container">
        <img src={Register} alt="ImageR" />
        <div className="sections">
          <div className="section">
            <img src={ImageL} alt="User" />
          </div>
          <div className="section">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              minLength="8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <button onClick={handleRegister}>Register Now</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
