import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
