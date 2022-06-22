import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCartSuccess: (state, action) => {
      state.isFetching = false;
      state.carts = action.payload;
    },
    getCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCartSuccess: (state, action) => {
      state.isFetching = false;
      console.log(action)
      state.carts.splice(
        state.carts.findIndex((item) => item._id === action.payload._id),
        1
      );
      
    },
    deleteCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCartSuccess: (state, action) => {
      state.isFetching = false;
      // console.log("id là" + state.carts.findIndex((item) => item._id === action.payload._id))
      // console.log("sản phẩm này là" +  state.carts)
      // console.log("action là" + action.payload._id)
      
      state.carts[
        state.carts.findIndex((item) => item._id === action.payload._id)
      ] = action.payload;
    },
    updateCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCartSuccess: (state, action) => {
      state.isFetching = false;
      state.carts.push(action.payload);
    },
    addCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getCartStart,
  getCartSuccess,
  getCartFailure,
  deleteCartStart,
  deleteCartSuccess,
  deleteCartFailure,
  updateCartStart,
  updateCartSuccess,
  updateCartFailure,
  addCartStart,
  addCartSuccess,
  addCartFailure,
} = cartSlice.actions;

export default cartSlice.reducer;