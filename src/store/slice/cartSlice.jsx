import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const { id, name, type, image, quantity, price } = action.payload;

      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        alert('Item already in cart');
        return [...state];
      }
      return [...state, { id, name, type, image, quantity, price }];
    },
    deleteCart(state, action) {
      const updatedCart = state.filter((curElem) => {
        return curElem.id !== action.payload;
      });
      return (state = updatedCart);
    },
    updateCart(state, action) {
        console.log("Current state:", state);
        console.log("Action payload:", action.payload);
        
        const { id, value } = action.payload;
        const index = state.findIndex((item) => item.id === id);
      
        if (index !== -1) {
          const updatedItem = { ...state[index], quantity: value };
          const newState = [...state];
          newState[index] = updatedItem;
          
          console.log("Updated state:", newState);
          
          return newState;
        }
      
        console.log("Item not found in state.");
        return state;
      }
      
  },
});

export default cartSlice.reducer;

export const { addCart, deleteCart, updateCart } = cartSlice.actions;