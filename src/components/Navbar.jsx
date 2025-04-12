import React from "react";

function Navbar({ setActivePage }) {
  return (
    <nav className="navbar">
      <ul>
      
  <li>
    <button onClick={() => setActivePage("Home")}>Home</button>
  </li>
  <li>
    <button onClick={() => setActivePage("Services")}>Services</button>
  </li>
  <li>
    <button onClick={() => setActivePage("Portfolio")}>Portfolio</button>
  </li>
  <li>
    <button onClick={() => setActivePage("Contact")}>Contact</button>
  </li>
  <li>
    <button onClick={() => setActivePage("Booking")}>Booking</button>
  </li>

      </ul>
    </nav>
  );
}

export default Navbar;

