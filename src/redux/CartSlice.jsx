import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart(state, action) {
      state.items.push({ ...action.payload, quantity: 1 });
    },
    increase(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      item.quantity++;
    },
    decrease(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item.quantity > 1) item.quantity--;
    },
    remove(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
    }
  }
});

export const { addToCart, increase, decrease, remove } = cartSlice.actions;
export default cartSlice.reducer;
