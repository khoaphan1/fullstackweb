import {
  loginFailed,
  loginStart,
  loginSuccess,
  logout,
  registerStart,
  registerSuccess,
  registerFailed,
  updateStart,
  updateSuccess,
  updateFailed,
} from "./authSlice";
import {
  addOrderStart,
  addOrderSuccess,
  addOrderFailure,
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
} from "./orderSlice";

import {
  getCommentStart,
  getCommentSuccess,
  getCommentFailure,
  addCommentStart,
  addCommentSuccess,
  addCommentFailure,
} from "./commentSlice";

import {
  getCategoryStart,
  getCategorySuccess,
  getCategoryFailure,
} from "./categorySlice"

import { publicRequest, userRequest } from "../requestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailed());
  }
};

export const userLogout = async (dispatch) => {
  dispatch(logout());
};

export const getOrders = async (dispatch) => {
  dispatch(getOrderStart());
  try {
    const res = await publicRequest.get("/order");
    console.log(res);
    dispatch(getOrderSuccess(res.data));
  } catch (err) {
    dispatch(getOrderFailure());
  }
};

// create order
export const addOrder = async (order, dispatch) => {
  dispatch(addOrderStart());
  try {
    const res = await userRequest.post(`/order`, order);
    console.log(res);
    dispatch(addOrderSuccess(res.data));
  } catch (err) {
    dispatch(addOrderFailure());
  }
};

export const addOrderOfUser = async (product, dispatch) => {
  dispatch(addOrderStart());

  try {
    const res = await userRequest.post(`/order`, product);
    dispatch(addOrderSuccess(res.data));
  } catch (err) {
    dispatch(addOrderFailure());
  }
};

export const updateProfileUser = async (id, user, dispatch) => {
  dispatch(updateStart());
  try {
    // update
    const res = await userRequest.put(`/auth/edit/${id}`, user);
    console.log(res);
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateFailed());
  }
};

// comment

export const getComments = async (dispatch) => {
  dispatch(getCommentStart());
  try {
    const res = await publicRequest.get("/comment");
    dispatch(getCommentSuccess(res.data));
  } catch (err) {
    dispatch(getCommentFailure());
  }
};

export const addComment = async (product, dispatch) => {
  dispatch(addCommentStart());
  try {
    const res = await publicRequest.post(`/comment`, product);
    dispatch(addCommentSuccess(res.data));
  } catch (err) {
    dispatch(addCommentFailure());
  }
};

export const getCategories = async (dispatch) => {
  dispatch(getCategoryStart());
  try {
    const res = await publicRequest.get("/category");
    dispatch(getCategorySuccess(res.data));
  } catch (err) {
    dispatch(getCategoryFailure());
  }
};
