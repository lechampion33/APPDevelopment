import React from 'react';
import '../css/Landing.css';
import { NavLink } from 'react-router-dom';
import Start from "../images/start.png"
import Invest from "../images/investment.png"
import Repaid from "../images/pay.png"
import Repeat from "../images/money.png"
function Landing() {
  return (
    <div>
      <nav className="navbar">
        <h1>Switchblade</h1>
        <ul className='Navbar-list'>
          <li><NavLink exact to="/" activeClassName="active">For Lenders</NavLink></li>
          <li><NavLink exact to="/" activeClassName="active">For Borrowers</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">Reference</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          <button><NavLink to="/contact" activeClassName="active">Login</NavLink></button>
        </ul>
      </nav>
      <div className="content">
        <div className="overlay"></div>
        <div className="text-section">
          <h2>Welcome to Switchblade</h2>
          <p>Start your financial journey with us.</p>
          <button>Get Started Today</button>
        </div>
      </div>
      <div className='Landing-card'>
        <h1>How Do You Get Started?</h1>
        <div className="box-container">
          <div className="box1">
            <h1>Lender</h1>
            <p>A lender on our online lending platform is a trusted financial entity or individual that plays a pivotal role in connecting those in need of funds with a source of capital. Lenders are the backbone of our platform, empowering borrowers to achieve their financial goals and fulfill their aspirations.</p>
            <button><NavLink to="/contact" activeClassName="active">Get Started </NavLink></button>
          </div>
          <div className="box2">
            <h1>Borrower</h1>
            <p>Borrowers are the heart and soul of our online lending platform. They are individuals, entrepreneurs, and businesses seeking financial support to accomplish their goals, whether it's buying a home, launching a new venture, covering unexpected expenses, or achieving personal milestones.</p>
            <button><NavLink to="/contact" activeClassName="active">Get Started</NavLink></button>
          </div>
        </div>
      </div>
      <div className='Landing-steps'>
        <h1>How it Works?</h1>
        <div className="image-grid">
          <div className="image-item">
            <img src={Start} alt="Image 1" />
            <h1>Get Started</h1>
            <p>Choose a borrower who inspires you or choose a cause you support.</p>
          </div>
          <div className="image-item">
            <img src={Invest} alt="Image 2" />
            <h1>Invest</h1>
            <p>Lend manually or automatically.</p>
          </div>
          <div className="image-item">
            <img src={Repaid} alt="Image 3" />
            <h1>Get Repaid</h1>
            <p>Borrowers have a 96% repayment rate</p>
          </div>
          <div className="image-item">
            <img src={Repeat} alt="Image 4" />
            <h1>Repeat</h1>
            <p>Change more lives by relending your money over and over again.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
