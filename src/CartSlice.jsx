import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // örnek yapı: { name, cost: "$12.00", image, quantity }
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, cost, image, quantity = 1 } = action.payload;
      const existing = state.items.find(i => i.name === name);
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ name, cost, image, quantity });
      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter(i => i.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload; // amount => yeni miktar
      const item = state.items.find(i => i.name === name);
      if (!item) return;
      if (amount <= 0) {
        state.items = state.items.filter(i => i.name !== name);
      } else {
        item.quantity = amount;
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;