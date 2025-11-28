import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NgoLogin from "./NgoLogin.jsx"
import "./NgoProfile.css"
import DashBoard from "./DashBoard.jsx"

function NgoProfile() {
  const [menuActive, setMenuActive] = useState(false);

  const API = "http://localhost:3000/ngos"; 
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

    const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (!email || !password) {
      alert("You must login first.");
      window.location.href = "/NgoLogin";
      return;
    }

    axios.get(API)
      .then((res) => {
        const ngos = res.data;

        // Find the NGO with matching email and password
       const match = ngos.find((ngo) =>
    ngo.email.trim() === email.trim() &&
    ngo.password.trim() === password.trim());
    console.log("LocalStorage email:", email);
   console.log("LocalStorage password:", password);
   console.log("NGOs from DB:", ngos);


        if (match) 
            {
          setProfile({
  name: match.name || "",
  email: match.email || "",
  contact: match.contact || "",
  state: match.state || "",
  district: match.district || "",
  startYear: match.startYear || "Not specified",
});
          setLoading(false);
        } else {
          alert("❌ Invalid Email or Password. Please login again.");
          localStorage.clear();
          window.location.href = "/NgoLogin";
        }
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Error connecting to database.");
      });
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/NgoLogin"
  };

  if (loading) 
    return <p className="text-center mt-5">Loading profile...</p>;

  return (
    <div>
     
       <nav className="navbar">
      <div className="logo">🍛 FoodBridge</div>
      <div className="menu-icon" onClick={toggleMenu}>☰</div>
      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/DashBoard">DashBoard</Link></li>
        <li><Link to="/NgoRegistration" onClick={() => {alert("✅ Successfully logged out!"); }}>Logout</Link></li>
      </ul>
    </nav>

      <div className="container mt-5">
        <h3 className="text-success">📄 Your Profile</h3>
        <div className="bg-light p-4 rounded shadow-sm">
          <p>🏢<strong>Name:</strong> {profile.name}</p>
          <p>📧<strong>Email:</strong> {profile.email}</p>
          <p>📞 <strong>Contact:</strong> {profile.contact}</p>
          <p>🗺️<strong>State:</strong> {profile.state}</p>
          <p>🏙️<strong>District:</strong>{profile.district}</p>
          <p>📅<strong>Started In:</strong> {profile.startYear}</p>
        </div>
      </div>

    </div>
  );
}

export default NgoProfile;
