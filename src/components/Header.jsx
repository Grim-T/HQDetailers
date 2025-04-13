import React from 'react';
import logo from '../assets/images/Image.jpeg'; 
import './components/Header.css';
<img src={logo} alt="HQ Detailers Logo" className="logo" />
function Header() {
  return (
    <header style={{ backgroundColor: '#1a1a1a', padding: '1rem' }}>
      <img
        src={logo}
        alt="HQ Detailers Logo"
        style={{ width: '360px', height: 'auto' }}
      />
    </header>
  );
}

export default Header;
