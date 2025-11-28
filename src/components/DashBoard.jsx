import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate,Link } from "react-router-dom";
import "./DashBoard.css"
import NgoProfile from "./NgoProfile.jsx";

function DashBoard() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);const [menuActive, setMenuActive] = useState(false);
const toggleMenu = () => {
      setMenuActive(!menuActive);
    };
  
  const location = useLocation();
  const navigate = useNavigate();
  const ngoName = location.state?.ngoName || "NGO"; 

  useEffect(() => {
    // Fetch donations from server
    axios.get("https://foodbridge-json-api.onrender.com/donations")
      .then((res) => {
        setDonations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching donations:", err);
        alert("Failed to fetch donations.");
      });
  }, []);

  const handleLogout = () => {
    alert("✅ Successfully logged out!");
    navigate("/NgoRegistration"); 
  };

  return (
    <div>
    <nav className="navbar">
      <div className="logo">🍛 FoodBridge</div>
      <div className="menu-icon" onClick={toggleMenu}>☰</div>
      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/NgoProfile">Profile</Link></li>
        <li><Link to="/NgoRegistration" onClick={() => {alert("✅ Successfully logged out!"); }}>Logout</Link></li>
      </ul>
    </nav>
    <div className="dashboard-container">
      <main className="container mt-4">
        <h3 className="text-success">👋 Welcome, {ngoName}</h3>

        <div className="mt-4">
          <h4>🍱 Available Donations</h4>

          {loading ? (
            <p>Loading donations...</p>
          ) : donations.length === 0 ? (
            <p>No donations available right now.</p>
          ) : (
            <div className="donations-container">
              {donations.map((d, i) => (
                <div key={i} className="donation-card">
                  <p><strong>Name:</strong> {d.donorname}</p>
                  <p><strong>Contact:</strong>{d.contact}</p>
                  <p><strong>Quantity:</strong> {d.quantity}</p>
                  <p><strong>Location:</strong> {d.district}, {d.state}</p>
                  <p className={d.expiry && new Date(d.expiry) < new Date() ? "expiry expired" : "expiry"}>
                    <strong>Expiry:</strong> {d.expiry ? new Date(d.expiry).toLocaleString() : "N/A"}
                  </p>
                  <p><strong>Contact:</strong> {d.contact}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        
      </main>
    </div>
    </div>
  );
}

export default DashBoard;
