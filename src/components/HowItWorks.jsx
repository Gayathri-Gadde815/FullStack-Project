import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import donation from "../assets/donation.png";
import location from "../assets/location.png";
import contact from "../assets/contact.png";
import collection from "../assets/collecting.png";
import happiness from "../assets/happines.png";
import fooddistribution from "../assets/fooddistribution.png";
import "./HowItWorks.css"


function HowItWorks()
{
    return (
        <>
        <Navbar />
         <div className="container images mt-5">
    <h2 className="text-center text-success mb-4">How FoodBridge Works</h2>
    <p className="text-center mb-5">A simple process that connects food donors with NGOs to reduce hunger and waste.</p>
    <div className="row text-center">
      
      <div className="col-12 col-sm-6 col-md-4 mb-4">
        <img src={donation} className="img-fluid how-img" alt="Donating food"/>
        <h5 className="mt-3">Step 1: Donate</h5>
        <p>Donors submit food details via the Donate page.</p>
      </div>
       
      <div className="col-12 col-sm-6 col-md-4 mb-4">
        <img src={location} className="img-fluid how-img" alt="Location Match"/>
        <h5 className="mt-3">Step 2: Nearby Match</h5>
        <p>NGOs can able to see the list of nearby  Donations.</p>
      </div>

      <div className="col-12 col-sm-6 col-md-4 mb-4">
        <img src={contact} className="img-fluid how-img" alt="Contact"/>
        <h5 className="mt-3">Step 3: Contact</h5>
        <p>NGOs contact donors to confirm availability and pickup.</p>
      </div>

      <div className="col-12 col-sm-6 col-md-4 mb-4">
        <img src={collection} className="img-fluid how-img" alt="Collecting food"/>
        <h5 className="mt-3">Step 4: Collect</h5>
        <p>NGOs collect the food safely and quickly.</p>
      </div>

      <div className="col-12 col-sm-6 col-md-4 mb-4">
        <img src={fooddistribution} className="img-fluid how-img" alt="Distribution"/>
        <h5 className="mt-3">Step 5: Distribute</h5>
        <p>Food is distributed to those in need at shelters, homes, and communities.</p>
      </div>

      <div className="col-12 col-sm-6 col-md-4 mb-4">
        <img src={happiness} className="img-fluid how-img" alt="Gratitude"/>
        <h5 className="mt-3">Step 6: Impact</h5>
        <p>Everyone wins — donors reduce waste, NGOs serve meals, lives are touched.</p>
      </div>
    </div>
      </div>

        <Footer />
        </>
    )
}
export default HowItWorks;