import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    newUser: null,
    editUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.newUser = action.payload;
    },
    registerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateStart: (state) => {
      state.isFetching = true;
    },
    updateSuccess: (state, action) => {
      state.isFetching = false;
      state.editUser = action.payload;
    },
    updateFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginFailed,
  loginSuccess,
  logout,
  registerStart,
  registerSuccess,
  registerFailed,
  updateStart,
  updateSuccess,
  updateFailed,
} = authSlice.actions;

export default authSlice.reducer;
