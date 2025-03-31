import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("services")}>Services</button>
      <button onClick={() => setPage("portfolio")}>Portfolio</button>
      <button onClick={() => setPage("contact")}>Contact</button>
      <button onClick={() => setPage("booking")}>Book Now</button>
    </nav>
  );
};

export default Navbar;
