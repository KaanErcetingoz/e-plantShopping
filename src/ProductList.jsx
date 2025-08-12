import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";
import { plantsArray } from "./plants";

export default function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});
  // `plantsArray` is imported from `./plants`.

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, cost: plant.cost, image: plant.image, quantity: 1 }));
    setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((p) => {
        const disabled = !!addedToCart[p.name];
        return (
          <div key={p.name} className="product-card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p>{p.cost}</p>
            <button disabled={disabled} onClick={() => handleAddToCart(p)}>
              {disabled ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
}