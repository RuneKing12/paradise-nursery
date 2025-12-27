import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </nav>

      {/* About Content */}
      <div className="about-us-container" style={{ padding: "20px" }}>
        <h2>About Paradise Nursery</h2>
        <p>
          Paradise Nursery is your one-stop online shop for beautiful and healthy
          houseplants. Our mission is to bring nature into your home, office, or
          workspace with ease and convenience.
        </p>
        <p>
          We offer a wide variety of plants, care tips, and accessories to help
          you create a green and vibrant space. Whether you are a beginner or an
          experienced plant parent, we have something for everyone.
        </p>
        <p>Happy planting!</p>
      </div>
    </div>
  );
};

export default AboutUs;
