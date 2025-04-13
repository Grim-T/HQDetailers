import React from "react";
import "./Home.css";

//import exteriorImg from "../assets/exterior.jpg";
//import interiorImg from "../assets/interior.jpg";
//import mobileImg from "../assets/mobile.jpg";

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to HQ Detailers</h1>
        <p>Your go-to destination for premium auto detailing services.</p>
      </section>

      <section className="card-section">
        <div className="card">
          //<img src={exteriorImg} alt="Exterior Detailing" />
          <h2>Exterior Perfection</h2>
          <p>From hand washes to ceramic coatings, we make your car shine like new.</p>
        </div>

        <div className="card">
          //<img src={interiorImg} alt="Interior Detailing" />
          <h2>Interior Detailing</h2>
          <p>Deep cleaning, shampoo, and leather care that revives your car’s interior.</p>
        </div>

        <div className="card">
          //<img src={mobileImg} alt="Mobile Service" />
          <h2>Mobile Service</h2>
          <p>We bring our professional service straight to your driveway, saving you time.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;