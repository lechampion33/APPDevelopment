import React, { useState } from 'react';
import './../css/Signup.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && fullName && phoneNumber) {
      toast.success('Signup successful!');
    } else {
      toast.error('Please fill in all the fields.');
    }

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Full Name:', fullName);
    console.log('Phone Number:', phoneNumber);
  };

  const handleLoginClick = () => {
    navigate('/'); 
  };

  return (
    <div className="signup-page">
      <h1>Join Us and Thrive</h1>
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
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <div className="button-center">
        <p>
          Already have an account?{' '}
          <span className="login-link" onClick={handleLoginClick} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            Login
          </span>
        </p>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Signup;
