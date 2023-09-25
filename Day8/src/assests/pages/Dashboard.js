import React, { useState } from 'react';
import { useSelector } from 'react-redux'; 
import '../css/Dashboard.css';
import { useNavigate } from 'react-router-dom';
import myProfileImage from '../images/default.jpg';
function Dashboard() {
  const user = useSelector((state) => state.user); 
  const [activeTab, setActiveTab] = useState('Dashboard');
  const generateRandomData = () => {
    const data = [];
    for (let i = 1; i <= 8; i++) {
      const randomName = `Borrower ${i}`;
      const randomAmount = Math.floor(Math.random() * 100000); 
      data.push({ sno: i, name: randomName, amount: randomAmount });
    }
    return data;
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login'); 
  };
  
  const tableData = generateRandomData();
  let content;
  if (activeTab === 'Dashboard') {
    content = (
        <div>
          <h3>Look out Your Stats!!!</h3>
        <div className="loan-boxes">
          <div className="loan-box">
            <div className="box-title">Total Loans</div>
            <div className="box-value">12</div>
          </div>
          <div className="loan-box">
            <div className="box-title">Active Loan</div>
            <div className="box-value">2</div>
          </div>
          <div className="loan-box">
            <div className="box-title">Total Amount</div>
            <div className="box-value">$10,000</div>
          </div>
        </div>
      </div>
    );
  } else if (activeTab === 'Profile') {
    content = (
      <div className="profile-content">
        <div className="profile-left">
        <img
            src={myProfileImage}
            alt="Profile"
            style={{ width: '150px', height: '150px' }}
          />
      </div>
      <div className="profile-table">
      <table>
        <tbody>
          <tr>
            <td><strong>Name:</strong></td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>johndoe@example.com</td>
          </tr>
          <tr>
            <td><strong>Age:</strong></td>
            <td>30</td>
          </tr>
          <tr>
            <td><strong>Country:</strong></td>
            <td>United States</td>
          </tr>
          <tr>
            <td><strong>State:</strong></td>
            <td>Tamilnadu</td>
          </tr>
          <tr>
            <td><strong>Pin code:</strong></td>
            <td>641201</td>
          </tr>
          <tr>
            <td><strong>Address:</strong></td>
            <td>hcbasckajkcncznm</td>
          </tr>
          <tr>
            <td><strong>Bank Account Number:</strong></td>
            <td>78424901e98eXXXX</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    );
  } 
  else if (activeTab === 'Borrowers') {
    content = (
      <div className="Borrowers">
        <h2>Borrowers Table</h2>
      <table className="borrowers-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Borrower's Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.sno}</td>
              <td>{row.name}</td>
              <td>${row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  } 
  else if (activeTab === 'Borrowers') {
    content = (
      <div className="Borrowers">
        <h2>Borrowers Table</h2>
      <table className="borrowers-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Borrower's Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.sno}</td>
              <td>{row.name}</td>
              <td>${row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  } 
  else if (activeTab === 'Help') {
    content = (
      <div className="help-page">
      <h1>Help Center</h1>
      <section className="help-section">
        <h2>FAQs</h2>
        <ul>
          <li>How do I reset my password?</li>
          <li>How can I contact customer support?</li>
          <li>What are the system requirements?</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>Tutorials</h2>
        <ul>
          <li>Getting started guide</li>
          <li>Advanced features tutorial</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>Contact Us</h2>
        <p>If you need further assistance, please email us at support@example.com</p>
      </section>
    </div>
    );
  } 

  return (
    <div className='Dashboard'>
      <div className='Sidebar'>
        <div
          className={`SidebarItem ${activeTab === 'Dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('Dashboard')}
        >
          Dashboard
        </div>
        <div
          className={`SidebarItem ${activeTab === 'Profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('Profile')}
        >
          Profile
        </div>
        <div
          className={`SidebarItem ${activeTab === 'Borrowers' ? 'Borrowers' : ''}`}
          onClick={() => setActiveTab('Borrowers')}
        >
          Borrowers
        </div>
        <div
          className={`SidebarItem ${activeTab === 'Help' ? 'Help' : ''}`}
          onClick={() => setActiveTab('Help')}
        >
          Help
        </div>
        <div
          className={`SidebarItem ${activeTab === 'Logout' ? 'Logout' : ''}`}
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
      <div className='Dashboard-Content'>
        <h1>Hi, {user.username || 'Guest'}</h1>
        {content}
      </div>
    </div>
  );
}

export default Dashboard;
