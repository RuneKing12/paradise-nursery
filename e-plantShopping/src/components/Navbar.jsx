import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="navbar">
      <h3>Paradise Nursery</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">
          Cart <span className="cart-count">{total}</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
