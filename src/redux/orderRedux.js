import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload;
    },
    getOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteOrderSuccess: (state, action) => {
      state.isFetching = false;
      console.log(action)
      state.orders.splice(
        state.orders.findIndex((item) => item._id === action.payload._id),
        1
      );
      
    },
    deleteOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateOrderSuccess: (state, action) => {
      state.isFetching = false;
      // console.log("id là" + state.orders.findIndex((item) => item._id === action.payload._id))
      // console.log("sản phẩm này là" +  state.orders)
      // console.log("action là" + action.payload._id)
      
      state.orders[
        state.orders.findIndex((item) => item._id === action.payload._id)
      ] = action.payload;
    },
    updateOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders.push(action.payload);
    },
    addOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    resetProduct: (state) => {
      state.orders = [];
    },
  },
});

export const {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
  addOrderStart,
  addOrderSuccess,
  addOrderFailure,
  resetProduct
} = orderSlice.actions;

export default orderSlice.reducer;