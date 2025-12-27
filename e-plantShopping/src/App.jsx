import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center", marginTop: "100px" }}>
              <h1>Welcome to Paradise Nursery</h1>
              <Link to="/plants">
                <button style={{ padding: "10px 20px", marginTop: "20px" }}>
                  Get Started
                </button>
              </Link>
            </div>
          }
        />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
