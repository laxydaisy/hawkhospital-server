import React from "react";
import doctorimg from "./doctorimg.jpg";
import patientimg from "./patientimg.jpeg";
import './App.css';
import { Link } from "@reach/router";


function Homepage() {
  return (
    <div className="hwls-homepage">
      <h1>Home page</h1>
      <div className="dipi">
      <div className="di">
      <img src={doctorimg} /><br />
      <Link to="doctor">Doctor's info</Link>
    </div>

    <div className="pi">
      <img src={patientimg} /> <br/>
      <Link to="patient">Patient's info</Link>
    </div>
    </div>
    </div>
  );
}

export default Homepage;