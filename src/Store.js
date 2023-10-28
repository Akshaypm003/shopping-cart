import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/Cartslice.jsx"


export const store = configureStore({
  reducer: {
    cart : cartReducer,
    
  },
});
