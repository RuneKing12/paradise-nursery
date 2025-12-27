import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    const item = cart.find((i) => i.id === id);
    if (item) dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (id) => {
    const item = cart.find((i) => i.id === id);
    if (item && item.quantity > 1) dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (cart.length === 0) {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/plants">Plants</Link> | Cart (0)
        </nav>
        <h2>Your cart is empty</h2>
        <Link to="/plants">
          <button>Shop Plants</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/plants">Plants</Link> | Cart ({cart.length})
      </nav>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} width="100" />
          <div>
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>
          </div>
          <div>
            <button onClick={() => handleDecrement(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrement(item.id)}>+</button>
          </div>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <div className="cart-total">Total Cart Amount: ${total}</div>
      <div className="cart-actions">
        <button onClick={() => alert("Coming Soon")}>Checkout</button>
        <Link to="/plants">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
