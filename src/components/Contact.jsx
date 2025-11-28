import React from "react";
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

function Contact()
{
    return (
      <>
      <Navbar/>
    <section className="container my-5">
    <h2 className="text-center text-success mb-4">📬 Contact Information</h2>
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="bg-light p-4 rounded shadow">
          <h5>📍 Address</h5>
          <p>FoodBridge HQ,<br/> 123 Kindness Street, Bengaluru, India</p>

          <h5>📞 Phone</h5>
          <p>+91 98765 43210</p>

          <h5>📧 Email</h5>
          <p>supportfoodbridge@gmail.com</p>

          <h5>⏰ Working Hours</h5>
          <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </>
    )
}
export default Contact