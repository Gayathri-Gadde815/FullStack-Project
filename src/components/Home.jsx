import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import heroImage from "../assets/wesitehomepage pic.jpg";
import NgoRegistration from "./NgoRegistration.jsx"
import NgoList from "./NgoList.jsx"
import DonorForm from "./DonorForm.jsx";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to FoodBridge</h1>
          <div className="hero-image">
          <img src={heroImage} alt="Donate food" />
          </div>
          <p>Connecting food donors with NGOs to reduce hunger and waste.</p>
          <div className="hero-buttons">
            <a href="/DonorForm" className="btn">Donate Food</a>
            <a href="/NgoRegistration" className="btn secondary">NGO Login/Register</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
