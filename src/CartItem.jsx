import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

export default function CartItems({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items);

  const priceNum = (costStr) => parseFloat(String(costStr).replace(/[^0-9.]/g, ""));
  const calculateItemSubtotal = (item) => item.quantity * priceNum(item.cost);

  const total = useMemo(
    () => items.reduce((sum, it) => sum + calculateItemSubtotal(it), 0),
    [items]
  );

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    const next = item.quantity - 1;
    if (next <= 0) {
      dispatch(removeItem({ name: item.name }));
    } else {
      dispatch(updateQuantity({ name: item.name, amount: next }));
    }
  };

  const handleRemove = (item) => dispatch(removeItem({ name: item.name }));
  const handleContinue = (e) => onContinueShopping && onContinueShopping(e);

  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };

  if (!items.length) return <div className="cart-empty">Your cart is empty.</div>;

  return (
    <div className="cart">
      {items.map((it) => (
        <div key={it.name} className="cart-item">
          <img src={it.image} alt={it.name} className="thumb" />
          <div className="meta">
            <h4>{it.name}</h4>
            <div>Unit: {it.cost}</div>
            <div>Subtotal: ${calculateItemSubtotal(it).toFixed(2)}</div>
            <div className="qty">
              <button onClick={() => handleDecrement(it)}>-</button>
              <span>{it.quantity}</span>
              <button onClick={() => handleIncrement(it)}>+</button>
            </div>
          </div>
          <button className="remove" onClick={() => handleRemove(it)}>Delete</button>
        </div>
      ))}

      <div className="cart-footer">
        <button onClick={handleContinue}>Continue Shopping</button>
        <div className="total">Total: ${total.toFixed(2)}</div>
        <button onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
}