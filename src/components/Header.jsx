import React from 'react';
import logo from './src/assets/images/Image.jpeg'; // Adjust path as needed

function Header() {
  return (
    <header style={{ backgroundColor: '#1a1a1a', padding: '1rem' }}>
      <img
        src={logo}
        alt="HQ Detailers Logo"
        style={{ width: '150px', height: 'auto' }}
      />
    </header>
  );
}

export default Header;