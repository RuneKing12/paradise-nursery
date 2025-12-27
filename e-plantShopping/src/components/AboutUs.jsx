import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>About Paradise Nursery</h2>
      <p>We provide the finest houseplants to beautify your home.</p>
      <p>Our mission: Healthy plants, happy customers.</p>
      <Link to="/">
        <button style={{ marginTop: "20px" }}>Back to Home</button>
      </Link>
    </div>
  );
}

export default AboutUs;
