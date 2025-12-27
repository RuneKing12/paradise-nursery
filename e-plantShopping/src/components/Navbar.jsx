import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart.items);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ padding: "10px", backgroundColor: "#a1d6a1", display: "flex", justifyContent: "space-between" }}>
      <div>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
        <Link to="/plants" style={{ marginRight: "20px" }}>Plants</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
        <Link to="/about" style={{ marginLeft: "20px" }}>About Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
