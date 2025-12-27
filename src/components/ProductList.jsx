import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 200, img: "https://www.niehs.nih.gov/sites/default/files/health/assets/images/aloe_leaf.jpg" },
  { id: 2, name: "Snake Plant", price: 300, img: "https://m.media-amazon.com/images/I/715ow8JqF8L._SY879_.jpg" },
  { id: 3, name: "Peace Lily", price: 250, img: "https://m.media-amazon.com/images/I/518WgiCU3FL._AC_UF1000,1000_QL80_.jpg" },
  { id: 4, name: "Money Plant", price: 180, img: "https://gachwala.in/wp-content/uploads/2022/06/IMAGE-1-13.webp" },
  { id: 5, name: "Spider Plant", price: 220, img: "https://nurserylive.com/cdn/shop/files/spider-plant_e45f05e5-e27c-49fb-b24d-a12b47c688f0.jpg?v=1751755176" },
  { id: 6, name: "Rubber Plant", price: 350, img: "https://m.media-amazon.com/images/I/512GDQH0dcL._AC_UF1000,1000_QL80_.jpg" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="products">
      <div className="category">
        <h2>House Plants</h2>

        <div className="product-grid">
          {plants.map((p) => {
            const added = cartItems.find((i) => i.id === p.id);
            return (
              <div className="product-card" key={p.id}>
                <img src={p.img} />
                <h3>{p.name}</h3>
                <p>₹{p.price}</p>
                <button
                  disabled={added}
                  onClick={() => dispatch(addToCart(p))}
                >
                  {added ? "Added" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
