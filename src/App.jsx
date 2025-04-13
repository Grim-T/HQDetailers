import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/contact.jsx";
import Booking from "./components/Booking.jsx";
import Footer from "./components/Footer";
import "./App.css";
 

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
      <Footer />
    </div>
  );
}

export default App;