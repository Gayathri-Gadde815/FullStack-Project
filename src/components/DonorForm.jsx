import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "./DonorForm.css";

const districtOptions = {
  "Andhra Pradesh": [
    "Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Kakinada", "Kurnool",
    "Nandyal", "Nellore", "Parvathipuram Manyam", "Prakasam", "Srikakulam",
    "Sri Potti Sriramulu Nellore", "Visakhapatnam", "Vizianagaram", "West Godavari",
    "YSR Kadapa", "Alluri Sitarama Raju", "Anakapalli", "Annamayya", "Bapatla",
    "Sri Sathya Sai"
  ],
  Telangana: [
    "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagitial", "Jangaon", "Jayashankar Bhupalpally",
    "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Mahabubabad", "Mahbubnagar",
    "Mancherial", "Medak", "Medchal Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda",
    "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy",
    "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural",
    "Warangal Urban", "Yadadri Bhuvanagiri"
  ]
};

function DonorForm() {
  const API = "https://fullstack-project-vdtp.onrender.com/donations";

  const [state, setState] = useState("");
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");

  const [responseMsg, setResponseMsg] = useState("");

  const [formData, setFormData] = useState({donorName: "",quantity: "",expiry: "",contact: "" });

  const handleStateChange = (e) => {
    const value = e.target.value;
    setState(value);
    setDistricts(districtOptions[value]);
    setDistrict("");
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   const { donorName, quantity, expiry, contact } = formData;

    if (!donorName || !quantity || !state || !district || !expiry || !contact) {
      setResponseMsg("❌ Please fill in all fields.");
      return;
    }

    if (!/^\d{10}$/.test(contact)) {
      alert("📞 Enter a valid 10-digit phone number.");
      return;
    }

    axios.post(API, {donorName, quantity,state,district,expiry,contact})
      .then(() => {
        setResponseMsg("✅ Donation submitted successfully!");

        setFormData({donorName: "",quantity: "",expiry: "",contact: ""});
        setState("");
        setDistrict("");
        setDistricts([]);
      })
      .catch(() => {
        setResponseMsg("❌ Server Error! Try Again.");
      });
  };

  return (
    <>
      <Navbar />

      <section className="form-section container mt-4">
        <h2 className="text-center mb-4">Donate Food</h2>

        <form onSubmit={handleSubmit}>

          <input type="text" name="donorName" placeholder="Your Name" value={formData.donorName} onChange={handleInputChange} />
          <input type="text" name="quantity" placeholder="Quantity (Example: 5 Plates)"value={formData.quantity} onChange={handleInputChange} />

          <select name="state" value={state} onChange={handleStateChange} required>
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
          </select>

          <select name="district" value={district}
            onChange={(e) => setDistrict(e.target.value)} required>
            <option value="">Select District</option>
            {districts.map((i) => (
              <option value={i}>{i}</option>
            ))}
          </select>
          <input type="datetime-local"name="expiry" value={formData.expiry} onChange={handleInputChange} required/>
          <input type="text" name="contact" placeholder="Contact Number"value={formData.contact} onChange={handleInputChange} />
          <button type="submit" className="btn btn-success w-100 mt-3">Submit Donation</button>
          <p className="mt-3 text-center text-danger">{responseMsg}</p>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default DonorForm;
