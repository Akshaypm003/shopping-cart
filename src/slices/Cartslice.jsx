import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: [] ,},
  reducers: {
    addToCart: (state,action) => {

      // to find the index of item 
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        // Item exists, increase qty
        const newItem = {
          ...state.value[itemIndex],
          qty: state.value[itemIndex].qty + 1,
        };
        return {
          ...state,
          value: [
            ...state.value.slice(0, itemIndex),
            newItem,
            ...state.value.slice(itemIndex + 1),
          ],
        };
      } else {
        // Item doesn't exist, add to array
        return { ...state, value: [...state.value, action.payload] };
      }
    },
    
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

