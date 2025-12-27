import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import CartItem from "./components/CartItem";
import "./App.css";

const App = () => {
  return (
    <Router>
      {/* Landing page */}
      <div className="landing-page">
        <h1>Welcome to Paradise Nursery</h1>
        <Link to="/plants">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>

      {/* Routing */}
      <Routes>
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
