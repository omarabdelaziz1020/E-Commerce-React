import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { removeItem } from "../../redux/cartSlice";

import "./cart.styles.scss";

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.items.map((item) => (
              <li key={item.id}>
                <span>
                  {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                </span>
                <button onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div>
            <strong>Total: ${cart.totalAmount.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
