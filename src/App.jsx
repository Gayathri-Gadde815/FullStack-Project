import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Features from "./components/Features.jsx";
import Contact from "./components/Contact.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import NgoRegistration from "./components/NgoRegistration.jsx";
import NgoList from "./components/NgoList.jsx";
import DonorForm from "./components/DonorForm.jsx";
import NgoLogin from "./components/NgoLogin.jsx";
import NgoProfie from "./components/NgoProfile.jsx";
import DashBoard from "./components/DashBoard.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/NgoRegistration" element={<NgoRegistration />} />
        <Route path="/NgoList" element={<NgoList/>} />
        <Route path="/donorform" element={<DonorForm />} />
        <Route path="/NgoLogin" element={<NgoLogin />} />
        <Route path="/NgoProfile" element={<NgoProfie />} />
        <Route path="/DashBoard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
