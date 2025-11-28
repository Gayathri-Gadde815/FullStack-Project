import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import  "./Home.jsx"
import "./Contact.jsx"
import "./NgoRegistration.jsx";
import "./NgoList.jsx"
import "./DonorForm.jsx"
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  
  return (
    <nav className="navbar">
      <div className="logo">🍛 FoodBridge</div>
      <div className="menu-icon" onClick={toggleMenu}>☰</div>
      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/DonorForm">Donate</Link></li>
        <li><Link to="/NgoRegistration">Login/Register</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
        <li><Link to="/NgoList">NGOs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
