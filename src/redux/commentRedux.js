import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getCommentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCommentSuccess: (state, action) => {
      state.isFetching = false;
      state.comments = action.payload;
    },
    getCommentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteCommentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCommentSuccess: (state, action) => {
      state.isFetching = false;
      console.log(action)
      state.comments.splice(
        state.comments.findIndex((item) => item._id === action.payload._id),
        1
      );
      
    },
    deleteCommentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateCommentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCommentSuccess: (state, action) => {
      state.isFetching = false;
      // console.log("id là" + state.comments.findIndex((item) => item._id === action.payload._id))
      // console.log("sản phẩm này là" +  state.comments)
      // console.log("action là" + action.payload._id)
      
      state.comments[
        state.comments.findIndex((item) => item._id === action.payload._id)
      ] = action.payload;
    },
    updateCommentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addCommentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCommentSuccess: (state, action) => {
      state.isFetching = false;
      state.comments.push(action.payload);
    },
    addCommentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getCommentStart,
  getCommentSuccess,
  getCommentFailure,
  deleteCommentStart,
  deleteCommentSuccess,
  deleteCommentFailure,
  updateCommentStart,
  updateCommentSuccess,
  updateCommentFailure,
  addCommentStart,
  addCommentSuccess,
  addCommentFailure,
} = commentSlice.actions;

export default commentSlice.reducer;