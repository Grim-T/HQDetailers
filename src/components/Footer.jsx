import React from "react";
import { FaInstagram, FaArrowUp } from "react-icons/fa";
import "../components/Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#booking">Booking</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact & Hours</h4>
          <p>Email: contact@hqdetailers.com</p>
          <p>Phone: 01234 567890</p>
          <p>Open: Mon–Sun, 10am–4pm</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <a
            href="https://www.instagram.com/hqdetailers" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram size={24} />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HQ Detailers. All rights reserved.</p>
        <button onClick={scrollToTop} className="back-to-top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;