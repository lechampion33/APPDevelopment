import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './assests/pages/Login';
import Signup from './assests/pages/Signup';
import Landing from './assests/pages/Landing';
import Lenders from './assests/pages/Lenders';
import Dashboard from './assests/pages/Dashboard';
import Borrowers from './assests/pages/Borrowers';
import Verify from './assests/pages/Verify';
import Terms from './assests/pages/Terms';
import Privacy from './assests/pages/Privacy';
import Help from './assests/pages/Help';
import Faq from './assests/pages/Faq';

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
          <Route path="/borrower" element={<Borrowers/>}/>
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path="/Faq" element={<Faq/>}/>
        </Routes>
      </div>
    </Router>
  );
}
