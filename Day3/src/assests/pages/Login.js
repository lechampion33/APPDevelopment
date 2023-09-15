import React, { useState } from 'react';
import './../css/Login.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate(); 

  const handleSignupClick = () => {
    navigate('/signup'); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      toast.success('Login successful!');
    } else {
      toast.error('Please fill in both email and password fields.');
    }

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <h1>Your World, Your Account - Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
            autoFocus
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="button-center">
        <p>
          Don't have an account?{' '}
          <span className="signup-link" onClick={handleSignupClick} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            Sign up
          </span>
        </p>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Login;
