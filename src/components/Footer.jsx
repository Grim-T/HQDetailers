import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} HQ Detailers. All rights reserved.</p>
        <p>Made with care by the HQ team.</p>
      </div>
    </footer>
  );
}

export default Footer;