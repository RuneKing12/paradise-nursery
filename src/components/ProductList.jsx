import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const productsData = {
  "House Plants": [
    { id: 1, name: "Aloe Vera", price: 200, img: "/images/aloe_vera.jpg" },
    { id: 2, name: "Snake Plant", price: 250, img: "/images/snake_plant.jpg" },
    { id: 3, name: "Peace Lily", price: 300, img: "/images/peace_lily.jpg" },
  ],
  "Flowering Plants": [
    { id: 4, name: "Orchid", price: 400, img: "/images/orchid.jpg" },
    { id: 5, name: "Jasmine", price: 350, img: "/images/jasmine.jpg" },
    { id: 6, name: "Hibiscus", price: 300, img: "/images/hibiscus.jpg" },
  ],
  "Succulents": [
    { id: 7, name: "Echeveria", price: 150, img: "/images/echeveria.jpg" },
    { id: 8, name: "Crassula", price: 180, img: "/images/crassula.jpg" },
    { id: 9, name: "Sedum", price: 120, img: "/images/sedum.jpg" },
  ],
};

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedItems([...addedItems, product.id]);
  };

  return (
    <div className="products">
      {Object.entries(productsData).map(([category, products]) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={addedItems.includes(product.id)}
                >
                  {addedItems.includes(product.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
