import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categories = action.payload;
    },
    getCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCategorySuccess: (state, action) => {
      state.isFetching = false;
      console.log(action)
      state.categories.splice(
        state.categories.findIndex((item) => item._id === action.payload._id),
        1
      );
      
    },
    deleteCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCategorySuccess: (state, action) => {
      state.isFetching = false;
      // console.log("id là" + state.categorys.findIndex((item) => item._id === action.payload._id))
      // console.log("sản phẩm này là" +  state.categorys)
      // console.log("action là" + action.payload._id)
      
      state.categories[
        state.categories.findIndex((item) => item._id === action.payload._id)
      ] = action.payload;
    },
    updateCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categories.push(action.payload);
    },
    addCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getCategoryStart,
  getCategorySuccess,
  getCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailure,
  updateCategoryStart,
  updateCategorySuccess,
  updateCategoryFailure,
  addCategoryStart,
  addCategorySuccess,
  addCategoryFailure,
} = categorySlice.actions;

export default categorySlice.reducer;