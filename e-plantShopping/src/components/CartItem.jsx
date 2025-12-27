import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (id) => dispatch(updateQuantity({ id, amount: 1 }));
  const handleDecrement = (id) => dispatch(updateQuantity({ id, amount: -1 }));

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <img src={item.img} alt={item.name} width="50" />
              <div style={{ marginLeft: "10px", flexGrow: 1 }}>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <div>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: "10px" }}>Delete</button>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={() => alert("Checkout Coming Soon!")}>Checkout</button>
          <Link to="/plants">
            <button style={{ marginLeft: "10px" }}>Continue Shopping</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default CartItem;
