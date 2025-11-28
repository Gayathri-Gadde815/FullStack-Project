import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import "./Home.jsx"
import "./Features.jsx";
import "./Contact.jsx"
import "./HowItWorks.jsx"

function Footer(){
  return (
    <footer className="container py-4 mt-5 border-top">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
        <li className="nav-item"><Link to="/Features" className="nav-link px-2 text-body-secondary">Features</Link></li>
        <li className="nav-item"><Link to="/HowItWorks" className="nav-link px-2 text-body-secondary">How It Works</Link></li>
        <li className="nav-item"><Link to="/Contact" className="nav-link px-2 text-body-secondary">Contact Us</Link></li>   
      </ul>
      <p className="text-center text-body-secondary">© 2025 FoodBridge</p>
    </footer>
  );
};

export default Footer;
