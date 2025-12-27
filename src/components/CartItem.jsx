import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, remove } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {items.map((i) => (
        <div className="cart-item" key={i.id}>
          <img src={i.img} width="100" />
          <div>
            <h3>{i.name}</h3>
            <p>₹{i.price}</p>
            <button onClick={() => dispatch(decrease(i.id))}>-</button>
            {i.quantity}
            <button onClick={() => dispatch(increase(i.id))}>+</button>
            <button onClick={() => dispatch(remove(i.id))}>Delete</button>
          </div>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
      <button>Checkout (Coming Soon)</button>
      <br />
      <Link to="/plants">Continue Shopping</Link>
    </div>
  );
}

export default CartItem;
