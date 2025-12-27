import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (id, current) => {
    dispatch(updateQuantity({ id, quantity: current + 1 }));
  };

  const handleDecrement = (id, current) => {
    if (current > 1) dispatch(updateQuantity({ id, quantity: current - 1 }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>Unit Price: ₹{item.price}</p>
            <p>Total: ₹{item.price * item.quantity}</p>
            <div className="cart-buttons">
              <button onClick={() => handleDecrement(item.id, item.quantity)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item.id, item.quantity)}>
                +
              </button>
              <button onClick={() => handleRemove(item.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
      <h3>Total Amount: ₹{totalAmount}</h3>
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartItem;
