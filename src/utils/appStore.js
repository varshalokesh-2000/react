import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //main reducer, which combines reducers of slices
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
