import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    category: "House Plants",
    items: [
      { id: 1, name: "Aloe Vera", price: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYKhS3D-ETNaDNi_mZYMLx7eJ4mkVNs0Lg0BWwaPVmrnbukOh34Xi4OQEPZSjJr58J-r_wjzAjum7mIPV0R9nf_qWkTLShI-X_hGpfJD_JcQ&s=10" },
      { id: 2, name: "Snake Plant", price: 15, img: "https://m.media-amazon.com/images/I/715ow8JqF8L._AC_UF1000,1000_QL80_.jpg" },
      { id: 3, name: "Peace Lily", price: 12, img: "http://m.media-amazon.com/images/I/518WgiCU3FL._AC_UF1000,1000_QL80_.jpg" },
      { id: 4, name: "Spider Plant", price: 8, img: "https://nurserylive.com/cdn/shop/files/spider-plant_e45f05e5-e27c-49fb-b24d-a12b47c688f0.jpg?v=1751755176" },
      { id: 5, name: "Fiddle Leaf Fig", price: 20, img: "https://m.media-amazon.com/images/I/51rgetBTQ2L._AC_UF1000,1000_QL80_.jpg" },
    ],
  },
  {
    category: "Succulents",
    items: [
      { id: 7, name: "Echeveria", price: 7, img: "https://m.media-amazon.com/images/I/61TUCfadjFL._AC_UF1000,1000_QL80_.jpg" },
      { id: 8, name: "Jade Plant", price: 11, img: "https://nurserynisarga.in/wp-content/uploads/2024/12/capri-pink-6.webp" },
    ],
  },
  {
    category: "Flowering Plants",
    items: [
      { id: 10, name: "Orchid", price: 25, img: "https://www.orchid-tree.com/cdn/shop/collections/Nobile_New_Arrivals_by_Orchid-tree.jpg?v=1653040877&width=1500" },
      { id: 11, name: "Begonia", price: 14, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj0PvvrRswZjy1nwBxQ3Ed0dEaPiDPbuMjlwnR45Pzj7q4kgZ4TG_qWfEXqGUULBOYX4JP3A5st6q7mQB81wKMJ4NjilynkJ1a-9pDRso&s=10" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const cartIds = cart.map((item) => item.id);

  return (
    <div style={{ padding: "20px" }}>
      {plants.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {category.items.map((plant) => (
              <div key={plant.id} style={{ border: "1px solid gray", padding: "10px", width: "150px", textAlign: "center" }}>
                <img src={plant.img} alt={plant.name} width="100" />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button
                  onClick={() => dispatch(addItem({ ...plant, quantity: 1 }))}
                  disabled={cartIds.includes(plant.id)}
                >
                  {cartIds.includes(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
