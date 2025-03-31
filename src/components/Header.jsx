import React from "react";
import logo from "../assets/hq-detailer-logo.png"; 

const Header = () => {
  return (
    <header>
      <img src={logo} alt="HQ Detailer Logo" className="logo" />
    </header>
  );
};

export default Header;
