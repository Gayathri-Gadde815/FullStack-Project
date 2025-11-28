import React, { useState } from "react"
import axios from "axios"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import "./NgoRegistration.css"
import NgoLogin from "./NgoLogin.jsx"
import { Link } from "react-router-dom";

const districtOptions = {
  "Andhra Pradesh": [
    "Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Kakinada", "Kurnool",
    "Nandyal", "Nellore", "Parvathipuram Manyam", "Prakasam", "Srikakulam",
    "Sri Potti Sriramulu Nellore", "Visakhapatnam", "Vizianagaram", "West Godavari",
    "YSR Kadapa", "Alluri Sitarama Raju", "Anakapalli", "Annamayya", "Bapatla",
    "Sri Sathya Sai"
  ],
  "Telangana": [
    "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagitial", "Jangaon", "Jayashankar Bhupalpally",
    "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Mahabubabad", "Mahbubnagar",
    "Mancherial", "Medak", "Medchal Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda",
    "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy",
    "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural",
    "Warangal Urban", "Yadadri Bhuvanagiri"
  ]
};

function NgoRegistration() {
  const API = "https://fullstack-project-vdtp.onrender.com/ngos"

  const [state, setState] = useState("");
  const [districts, setDistricts] = useState([])
  const [district, setDistrict] = useState("")
  const [responseMsg, setResponseMsg] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    area: "",
    pincode: "",
    contact: "",
    email: "",
    password: "",
    established: ""
  });

  const handleStateChange = (e) => {
    const value = e.target.value;
    setState(value);
    setDistricts(districtOptions[value])
    setDistrict("");
  };

  const handleInputChange = (e) => {
    setFormData(({
      ...formData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, area, pincode, contact, email, password, established } = formData;

    if (!name || !state || !district || !area || !pincode || !contact || !email || !password || !established) {
      setResponseMsg("❌ Please fill in all fields.");
      return;
    }

    if (!/^\d{10}$/.test(contact)) {
      alert("📞 Enter a valid 10-digit phone number.");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      alert("📧 Email must end with @gmail.com");
      return;
    }

    axios.post(API, {name,state,district,area,pincode,contact,email,password,established})
      .then((res) => {
        console.log(res.data);
        setResponseMsg("✅ NGO Registered Successfully!");

        setFormData({name: "",area: "",pincode: "",contact: "",email: "",password: "",established: "" });
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
        <h2 className="text-center mb-4">NGO Registration</h2>

        <form id="ngoRegisterForm" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Organization Name"
            value={formData.name} onChange={handleInputChange} required />

          <select name="state" value={state} onChange={handleStateChange} required>
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
          </select>

          <select name="district" value={district}
            onChange={(e) => setDistrict(e.target.value)} required>
            <option value="">Select District</option>
            {districts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <input type="text" name="area" placeholder="Area"
            value={formData.area} onChange={handleInputChange} />

          <input type="text" name="pincode" placeholder="Pincode"
            value={formData.pincode} onChange={handleInputChange} />

          <input type="text" name="contact" placeholder="Contact Number"
            value={formData.contact} onChange={handleInputChange} />

          <input type="email" name="email" placeholder="Email"
            value={formData.email} onChange={handleInputChange} />

          <input type="password" name="password" placeholder="Password"
            value={formData.password} onChange={handleInputChange} />

          <input type="date" name="established"
            value={formData.established} onChange={handleInputChange} />

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Register
          </button>

          <p className="mt-3 text-center text-danger">{responseMsg}</p>
        </form>

        <p className="text-center mt-4">
          Already registered? <Link to="/NgoLogin">Login here</Link>
        </p>
      </section>

      <Footer />
    </>
  );
}

export default NgoRegistration;
