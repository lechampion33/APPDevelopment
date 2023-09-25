import React, { useState } from 'react';
import './../css/Login.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from "../../redux/actions/userActions"; 
import Logo from "../images/logo_pro.png";
import ImageL from "../images/poster.jpg";
import Register from "../gifs/login.gif";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(setUserName(username));
      toast.success('Login successful!');
      navigate('/borrower'); 
    } else {
      toast.error('Please fill in both username and password fields.');
    }
  };

  return (
    <div className="login">
      <nav className="navbar">
        <img src={Logo} alt="User" />
        <ul className='Navbar-list'>
          <li><NavLink exact to="/lenders" activeClassName="active">Lenders</NavLink></li>
          <li><NavLink exact to="/borrower" activeClassName="active">Borrowers</NavLink></li>
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
                placeholder="Enter the Username"
                value={username}
                onChange={handleUsernameChange}
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
