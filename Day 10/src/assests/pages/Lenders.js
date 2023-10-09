import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearFormData } from '../../redux/actions/userActions';
import '../css/Lenders.css';
import Logo from '../images/logo_pro.png';

function Lenders() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.formData);

  const [showUserData, setShowUserData] = useState(true);

  const handleLogout = () => {
    dispatch(clearFormData());
    setShowUserData(false);
    navigate("/login")
  };

  const generateRandomData = () => {
    const data = [];
    const countries = ['USA', 'Canada', 'UK', 'Australia', 'India'];
    const loanTerms = ['Short Term', 'Long Term'];
    const categories = ['Agriculture', 'Shop', 'Technology', 'Healthcare', 'Education'];
    for (let i = 1; i <= 5; i++) {
      data.push({
        sno: i,
        username: 'Default Username', 
        description: 'Default Description', 
        country: countries[Math.floor(Math.random() * countries.length)],
        loanTerm: loanTerms[Math.floor(Math.random() * loanTerms.length)],
        category: categories[Math.floor(Math.random() * categories.length)],
        amount: 'Default Amount', 
      });
    }
    if (showUserData) {
      data.splice(0, 1, {
        sno: 1,
        username: userData.username,
        description: userData.description,
        country: userData.country,
        loanTerm: userData.loanTerm,
        category: userData.category,
        amount: userData.amount,
      });
    }

    return data;
  };

  const tableData = generateRandomData();

  return (
    <div className='Lenders'>
      <nav className='navbar'>
        <img src={Logo} alt='User' />
        <ul className='Navbar-list'>
          <li>
            <NavLink exact to='/dash' activeClassName='active'>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/verify' activeClassName='active'>
              Verify
            </NavLink>
          </li>
          <button onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </nav>
      <div className='welcome'>
        <h2>
          <span className='highlighted-text'>{userData.username}</span>, Support a featured borrower with a microloan
        </h2>
      </div>
      <table className='borrower-table'>
        <thead>
          <tr>
            <th>sno</th>
            <th>Username</th>
            <th>Description</th>
            <th>Country</th>
            <th>Loan Term</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Lend</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.sno}</td>
              <td>{row.username}</td>
              <td>{row.description}</td>
              <td>{row.country}</td>
              <td>{row.loanTerm}</td>
              <td>{row.category}</td>
              <td>${row.amount}</td>
              <td>
                <button>Lend Money</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lenders;
