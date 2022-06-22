import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    currentComment: null,
    editUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
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
    addCommentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCommentSuccess: (state, action) => {
      state.isFetching = false;
      state.currentComment = action.payload;
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
    addCommentStart,
    addCommentSuccess,
    addCommentFailure,
} = commentSlice.actions;

export default commentSlice.reducer;
