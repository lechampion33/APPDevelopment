import React from 'react'
import Logo from "../images/logo_pro.png";
import { NavLink } from 'react-router-dom';
function BorrowerV() {
  return (
    <div className='bv'>
    <nav className="navbar">
      <img src={Logo} alt="User" />
        <ul className='Navbar-list'>
          <li><NavLink to="/help" activeClassName="active">Help</NavLink></li>
          <button><NavLink to="/login" activeClassName="active">Login</NavLink></button>
        </ul>
      </nav>
      <div className='bv-container'>
        <h2>hello</h2>
      </div>
    </div>
  )
}

export default BorrowerV
