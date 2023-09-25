import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink,useNavigate  } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Borrowers.css';
import Logo from '../images/logo_pro.png';
import { updateFormData } from "../../redux/actions/userActions"; 

function Borrowers() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      toast.error('Please fill in all the details, including a valid email.');
    } else if (!formData.verified) {
      toast.error('Please verify your profile.');
    } else {
      toast.success('Done');
      navigate('/lenders'); 
    }
  };

  const isFormValid = () => {
    const { username, email, country, description, amount, category } = formData;
    return (
      username.trim() !== '' &&
      email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/) &&
      country.trim() !== '' &&
      description.trim() !== '' &&
      amount.trim() !== '' &&
      category !== ''
    );
  };

  return (
    <div className='Borrowers'>
      <ToastContainer />
      <nav className="navbar">
        <img src={Logo} alt="User" />
        <ul className='Navbar-list'>
          <li><NavLink to="/verify" activeClassName="active">Verify</NavLink></li>
          <li><NavLink to="/help" activeClassName="active">Help</NavLink></li>
          <button><NavLink to="/login" activeClassName="active">Logout</NavLink></button>
        </ul>
      </nav>

      <div className="container">
        <h2>Borrower Information</h2>
        <div className="input-container">
          <div className="left-inputs">
            <div className="input-group">
              <label>Username</label>
              <input type="text" name="username" onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label>Country</label>
              <input type="text" name="country" onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label>Category</label>
              <select name="category" onChange={handleInputChange} value={formData.category}>
                <option value="">Select Category</option>
                <option value="agriculture">Agriculture</option>
                <option value="business">Business</option>
                <option value="organization">Organization</option>
              </select>
            </div>
          </div>
          <div className="right-inputs">
            <div className="input-group">
              <label>Description</label>
              <textarea name="description" onChange={handleInputChange}></textarea>
            </div>
            <div className="input-group">
              <label>Loan Term</label>
              <select name="loanTerm" onChange={handleInputChange} value={formData.loanTerm}>
                <option value="short-term">Short Term</option>
                <option value="long-term">Long Term</option>
              </select>
            </div>
            <div className="input-group">
              <label>Amount</label>
              <input type="number" name="amount" onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label>
                <input
                  type="checkbox"
                  name="verified"
                  checked={formData.verified}
                  onChange={handleInputChange}
                />
                I have verified my profile
              </label>
            </div>
          </div>
        </div>
        <div className="submit-button">
          <button type="submit" onClick={handleSubmit}>Submit</button>
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
  );
}

export default Borrowers;
