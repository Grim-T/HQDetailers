import React, { useState } from "react";
import Header from "./src/components/Header.jsx";
import Navbar from "./src/components/Navbar.jsx";
import Home from "./src/components/Home.jsx";
import Services from "./src/components/Services.jsx";
import Portfolio from "./src/components/Portfolio.jsx";
import Contact from "./src/components/Contact.jsx";
import Booking from "./src/components/Booking.jsx";
import "./src/App.css";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <Home />;
      case "Services":
        return <Services />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Booking":
        return <Booking />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Header />
      <Navbar setActivePage={setActivePage} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
