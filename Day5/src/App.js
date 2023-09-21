import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './assests/pages/Login';
import Signup from './assests/pages/Signup';
import Landing from './assests/pages/Landing';
import Lenders from './assests/pages/Lenders';
import Dashboard from './assests/pages/Dashboard';
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Landing/>}/>
          <Route path="/lenders" element={<Lenders/>}/>
          <Route path="/dash" element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}
