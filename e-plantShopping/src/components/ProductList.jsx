import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plantsData = [
  { id: 1, name: "Aloe Vera", price: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYKhS3D-ETNaDNi_mZYMLx7eJ4mkVNs0Lg0BWwaPVmrnbukOh34Xi4OQEPZSjJr58J-r_wjzAjum7mIPV0R9nf_qWkTLShI-X_hGpfJD_JcQ&s=10" },
  { id: 2, name: "Snake Plant", price: 15, image: "https://m.media-amazon.com/images/I/715ow8JqF8L._AC_UF1000,1000_QL80_.jpg" },
  { id: 3, name: "Peace Lily", price: 12, image: "http://m.media-amazon.com/images/I/518WgiCU3FL._AC_UF1000,1000_QL80_.jpg" },
  { id: 4, name: "Echeveria", price: 8, image: "https://m.media-amazon.com/images/I/61TUCfadjFL._AC_UF1000,1000_QL80_.jpg" },
  { id: 5, name: "Orchid", price: 20, image: "https://www.orchid-tree.com/cdn/shop/collections/Nobile_New_Arrivals_by_Orchid-tree.jpg?v=1653040877&width=1500" },
  { id: 6, name: "Jade Plant", price: 9, image: "https://nurserynisarga.in/wp-content/uploads/2024/12/capri-pink-6.webp" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  return (
    <div>
      {/* NAVBAR */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({cart.length})</Link> | <Link to="/about">About Us</Link>
      </nav>

      {/* Product Cards */}
      <div className="products">
        {plantsData.map((plant) => (
          <div className="product-card" key={plant.id}>
            <img src={plant.image} alt={plant.name} width="150" />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button
              onClick={() => dispatch(addItem(plant))}
              disabled={cart.find((i) => i.id === plant.id)}
            >
              {cart.find((i) => i.id === plant.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
