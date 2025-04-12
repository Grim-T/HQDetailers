import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to HQ Detailer</h1>
          <p>The Premium car detailing that brings your vehicle back to life.</p>
          <button className="book-now-btn">Book Now</button>
        </div>
        <div className="hero-image">
          <img src="/assets/images/car-placeholder.jpg" alt="Car detailing" />
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature-card">
            <img src="/assets/images/premium-service.jpg" alt="Premium Service" />
            <h3>Premium Service</h3>
            <p>Top-quality detailing with luxury-grade products and techniques.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/images/eco-friendly.jpg" alt="Eco Friendly" />
            <h3>Eco Friendly</h3>
            <p>We use eco-conscious materials that are safe for your car and the planet.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/images/mobile-service.jpg" alt="Mobile Detailing" />
            <h3>Mobile Detailing</h3>
            <p>We come to you — whether at home, work, or anywhere in between.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
