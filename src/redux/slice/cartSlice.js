// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], // 🛒 Just in Redux
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartSlice(state, action) {
      action.payload.forEach(newItem => {
        const existingItem = state.cartItems.find(item => item.id === newItem.id);
        if (existingItem) {
          // If item already exists, increase qty (optional logic)
          existingItem.qty += newItem.qty;
        } else {
          // If item does not exist, add it
          state.cartItems.push(newItem);
        }
      });
    },
    
    removeFromCartSlice(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addToCartSlice, removeFromCartSlice, clearCartSlice } = cartSlice.actions;
export default cartSlice.reducer;
