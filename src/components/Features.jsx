// src/pages/Features.jsx
import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "./Features.css";
function Features() {
  return (
    <>
  
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-4 text-center">🌟 FoodBridge Features</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Real-Time Food Donation</h5>
                <p className="card-text">
                  Donors can quickly list excess food, making it available to nearby NGOs in real-time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">NGO Dashboard</h5>
                <p className="card-text">
                  Registered NGOs can view available donations, contact donors, and manage food pickups efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Geo-Location Matching</h5>
                <p className="card-text">
                  FoodBridge connects donors and NGOs based on location for faster and smarter delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-center mt-5">Who Can Use FoodBridge?</h3>
        <p className="text-center text-muted mb-4">
          FoodBridge is designed to bring communities together. Whether you have food to give or need help serving others, there's a role for everyone.
        </p>

        <div className="row justify-content-center g-4">
          <div className="col-md-5">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">🍽️ Food Donors</h5>
                <ul className="list-unstyled">
                  <li>✅ Restaurants</li>
                  <li>✅ Caterers</li>
                  <li>✅ Households</li>
                  <li>✅ Event Organizers</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">🏢 NGOs & Organizations</h5>
                <ul className="list-unstyled">
                  <li>✅ Registered NGOs</li>
                  <li>✅ Community Kitchens</li>
                  <li>✅ Orphanages / Shelters</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-center mt-5">Coming Soon</h3>
        <ul className="list-group list-group-flush mb-5 pb-5">
          <li className="list-group-item">📱 Mobile App for Android & iOS</li>
          <li className="list-group-item">🧠 Food Expiry Detection Using AI</li>
          <li className="list-group-item">💬 Live Chat Between NGOs and Donors</li>
          <li className="list-group-item">📅 Pickup Time Scheduler</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
export default Features;
