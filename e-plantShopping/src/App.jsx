import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import CartItem from "./components/CartItem";

const App = () => (
  <Router>
    <Routes>
      {/* Landing Page */}
      <Route
        path="/"
        element={
          <div className="landing-page">
            <h1>Welcome to Paradise Nursery</h1>
            <a href="/plants">
              <button className="get-started-button">Get Started</button>
            </a>
          </div>
        }
      />

      {/* Product List */}
      <Route path="/plants" element={<ProductList />} />

      {/* Cart Page */}
      <Route path="/cart" element={<CartItem />} />

      {/* About Us */}
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </Router>
);

export default App;
