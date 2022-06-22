import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getBlogStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getBlogSuccess: (state, action) => {
      state.isFetching = false;
      state.blogs = action.payload;
    },
    getBlogFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteBlogStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteBlogSuccess: (state, action) => {
      state.isFetching = false;
      console.log(action)
      state.blogs.splice(
        state.blogs.findIndex((item) => item._id === action.payload._id),
        1
      );
      
    },
    deleteBlogFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateBlogStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateBlogSuccess: (state, action) => {
      state.isFetching = false;
      state.blogs[
        state.blogs.findIndex((item) => item._id === action.payload._id)
      ] = action.payload;
    },
    updateBlogFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addBlogStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addBlogSuccess: (state, action) => {
      state.isFetching = false;
      state.blogs.push(action.payload);
    },
    addBlogFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getBlogStart,
  getBlogSuccess,
  getBlogFailure,
  deleteBlogStart,
  deleteBlogSuccess,
  deleteBlogFailure,
  updateBlogStart,
  updateBlogSuccess,
  updateBlogFailure,
  addBlogStart,
  addBlogSuccess,
  addBlogFailure,
} = blogSlice.actions;

export default blogSlice.reducer;