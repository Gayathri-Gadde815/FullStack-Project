import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import axios from "axios";

function NgoList() {
  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = "http://localhost:3000/ngos";

  useEffect(() => {
    axios.get(API)
      .then((res) => {
        setNgos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error loading NGOs:", err);
        setLoading(false);
      });
    }, []);

  return (
    <>
      <Navbar />

      <div className="container py-5" style={{ backgroundColor: "rgba(255,255,255,0.95)", minHeight: "100vh" }}>
        <h2 className="text-center mb-4" style={{ color: "#28a745" }}>
          📋 Registered NGOs
        </h2>

        {loading ? (<p className="text-center">Loading...</p>) : ngos.length === 0 ? (<p className="text-center text-muted">No NGOs found.</p>
        ) : (<div className="row">
            {ngos.map((ngo) => (
              <div className="col-md-6 col-lg-4 mb-4" key={ngo.id}>
                <div
                  className="p-3 rounded shadow-sm"style={{ backgroundColor: "#f8f9fa", height: "100%" }}>
                  <h5>🏢 <strong>{ngo.name}</strong></h5>
                  <p>📧 <strong>Email:</strong> {ngo.email}</p>
                  <p>📞 <strong>Contact:</strong> {ngo.contact}</p>
                  <p>📅 <strong>Started in:</strong> {ngo.established || "N/A"}</p>
                  <p>🗺️ <strong>State:</strong> {ngo.state || "Not specified"}</p>
                  <p>🏙️ <strong>District:</strong> {ngo.district || "Not specified"}</p>
                  <p>📍 <strong>Area:</strong> {ngo.area || "N/A"}</p>
                  <p>📬 <strong>Pincode:</strong> {ngo.pincode || "N/A"}</p>
                </div>
              </div>
              ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default NgoList;
