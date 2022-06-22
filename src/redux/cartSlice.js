import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      state.total = state.total - (state.products[action.payload].price * state.products[action.payload].quantity)
      state.quantity = state.quantity  -1 ;
      state.products.splice(action.payload, 1);
    },
    editProduct: (state, action) => {
      console.log(action.payload.stt, action.payload.repQuantity, action.payload.type)
      state.products[action.payload.stt].quantity = action.payload.repQuantity
      if(action.payload.type === "dec"){
        state.total = state.total - (state.products[action.payload.stt].price)
      }else{
        state.total = state.total + (state.products[action.payload.stt].price)
      }
    },
    resetProduct: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, deleteProduct,editProduct, resetProduct } = cartSlice.actions;
export default cartSlice.reducer;