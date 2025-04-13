import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>Welcome to HQ Detailers</h1>
        <p>Premium car detailing with unmatched attention to detail.</p>
        <button className="cta-button">Book Now</button>
      </div>

      <div className="features">
        <div className="feature">
          <img src="/assets/images/placeholder1.jpg" alt="Interior Detailing" />
          <h3>Interior Perfection</h3>
          <p>Deep-clean and restore every inch of your car’s interior.</p>
        </div>

        <div className="feature">
          <img src="/assets/images/placeholder2.jpg" alt="Exterior Shine" />
          <h3>Exterior Excellence</h3>
          <p>High-gloss finish, scratch removal, and protection.</p>
        </div>

        <div className="feature">
          <img src="/assets/images/placeholder3.jpg" alt="Premium Packages" />
          <h3>Premium Packages</h3>
          <p>Tailored packages to meet every client's needs.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;