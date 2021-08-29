/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  cartList: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      const isProductAlreadyInCart = state.cartList.filter((c) => c.id === action.payload.id);
      if (isProductAlreadyInCart.length === 0) {
        state.cartList.push({ ...action.payload, qty: 1 });
      } else {
        const updatedCartList = state.cartList.map((cartItem) => {
          if (cartItem.id === action.payload.id) return { ...cartItem, qty: cartItem.qty + 1 };
          return cartItem;
        });
        state.cartList = updatedCartList;
      }
    },
    removeFromCart: (state, action) => {
      // const removeProductQty = state.cartList.find((cart) => cart.id === action.payload.id).qty;
      const updatedCartList = state.cartList.reduce((acc, i) => {
        if (i.id === action.payload.id) {
          if (i.qty > 1) {
            i.qty -= 1;
            acc.push(i);
            return acc;
          }
        } else acc.push(i);

        return acc;
      }, []);
      state.cartList = updatedCartList;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
