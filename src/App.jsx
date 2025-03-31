import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Booking from "./components/Booking";
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
    </div>
  );
}

export default App;
