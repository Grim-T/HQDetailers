import React from "react";

function Navbar({ setActivePage }) {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => setActivePage("Home")}>Home</li>
        <li onClick={() => setActivePage("Services")}>Services</li>
        <li onClick={() => setActivePage("Portfolio")}>Portfolio</li>
        <li onClick={() => setActivePage("Contact")}>Contact</li>
        <li onClick={() => setActivePage("Booking")}>Booking</li>
      </ul>
    </nav>
  );
}

export default Navbar;

