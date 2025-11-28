import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import"./NgoLogin.css";

function NgoLogin() {
  const API = "http://localhost:3000/ngos";

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(API)
      .then((response) => {
        const ngos = response.data;

        const match = ngos.find(
          (ngo) =>
            ngo.email.toLowerCase().trim() === formData.email.toLowerCase().trim() &&
            ngo.password.trim() === formData.password.trim()
        );

        if (match) {
          // Save login info to localStorage
          localStorage.setItem("email", formData.email);
          localStorage.setItem("password", formData.password);

          setMessage("✅ Login Successful!");
          window.location.href = "/NgoProfile"; // make sure route matches
        } else {
          setMessage("❌ Invalid Email or Password");
        }
      })
      .catch(() => {
        setMessage("❌ Error connecting to database.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="ngo-login-page">
        <form className="ngo-login-form" onSubmit={handleSubmit}>
          <h3 className="text-center text-success">NGO Login</h3>
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button className="btn btn-success w-100">Login</button>
          <p className="text-center text-danger mt-3">{message}</p>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default NgoLogin;
