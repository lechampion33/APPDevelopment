import React, { useState } from 'react';
import './../css/Login.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from "../../redux/actions/userActions"; // Updated action import
import Logo from "../images/logo_pro.png";
import ImageL from "../images/poster.jpg";
import Register from "../gifs/login.gif";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState(''); // Changed from 'username' to 'email'
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => { // Changed from 'handleUsernameChange' to 'handleEmailChange'
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const user = useSelector(state => state.user);

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/signin', {
        email, // Changed from 'username' to 'email'
        password,
      });

      // Assuming your response contains a field like 'success' indicating whether the login was successful
      if (response.data.success) {
        dispatch(setEmail(email)); // Changed from 'setUserName' to 'setEmail'
        toast.success('Login successful!');
        navigate('/borrower');
      } else {
        toast.error('Invalid credentials. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <div className="login">
      <nav className="navbar">
        <img src={Logo} alt="User" />
        <ul className='Navbar-list'>
          <li><NavLink to="/verify" activeClassName="active">Verify</NavLink></li>
        </ul>
      </nav>
      <div className="container">
        <img src={Register} alt="ImageR" />
        <div className="sections">
          <div className="section">
            <img src={ImageL} alt="User" />
          </div>
          <div className="section">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your Email" // Changed from 'Username' to 'Email'
                value={email}
                onChange={handleEmailChange}
                required
                autoFocus
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account?{' '}
              <span
                className="signup-link"
                onClick={handleSignupClick}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Login;
