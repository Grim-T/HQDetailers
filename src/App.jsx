import React, { useState } from "react";
import Header from "./src/components/Header";
import Navbar from "./src/components/Navbar";
import Home from "./src/components/Home";
import Services from "./src/components/Services";
import Portfolio from "./src/components/Portfolio";
import Contact from "./src/components/Contact";
import Booking from "./src/components/Booking";
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
