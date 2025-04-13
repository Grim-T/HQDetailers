import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to HQ Detailers</h1>
        <p>Your go-to destination for premium auto detailing services.</p>
      </section>

      <section className="card-section">
        <div className="card">
          <div className="card-img img-1"></div>
          <h2>Exterior Perfection</h2>
          <p>From hand washes to ceramic coatings, we make your car shine like new.</p>
        </div>

        <div className="card">
          <div className="card-img img-2"></div>
          <h2>Interior Detailing</h2>
          <p>Deep cleaning, shampoo, and leather care that revives your car’s interior.</p>
        </div>

        <div className="card">
          <div className="card-img img-3"></div>
          <h2>Mobile Service</h2>
          <p>We come to you — whether at home, work, or anywhere in between.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;