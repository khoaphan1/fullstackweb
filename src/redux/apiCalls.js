import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
} from "./userRedux";
import {
  getUserStart,
  getUserSuccess,
  getUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  addUserStart,
  addUserSuccess,
  addUserFailure,
} from "./usersRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";

import {
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
} from "./categoryRedux"

import {
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
} from "./blogRedux";


import {
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
} from "./commentRedux";

import {
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
} from "./orderRedux";


//************************************* AUTH **********************************/
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const userLogout = async (dispatch) => {
  dispatch(logout());
};

//*************   PRODUCTS       ******************* */
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/product");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/product/${id}`);
    dispatch(deleteProductSuccess(res.data));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    const res = await userRequest.put(`/product/${id}`, product);
    console.log(res);
    dispatch(updateProductSuccess(res.data));

    // dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/product`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

//*************   BLOG       ******************* */
export const getBlogs = async (dispatch) => {
  dispatch(getBlogStart());
  try {
    const res = await publicRequest.get("/blog");
    dispatch(getBlogSuccess(res.data));
  } catch (err) {
    dispatch(getBlogFailure());
  }
};

export const deleteBlog = async (id, dispatch) => {
  dispatch(deleteBlogStart());
  try {
    const res = await userRequest.delete(`/blog/${id}`);
    dispatch(deleteBlogSuccess(res.data));
  } catch (err) {
    dispatch(deleteBlogFailure());
  }
};

export const updateBlog = async (id, product, dispatch) => {
  dispatch(updateBlogStart());
  try {
    // update
    const res = await userRequest.put(`/blog/${id}`, product);
    console.log(res);
    dispatch(updateBlogSuccess(res.data));
  } catch (err) {
    dispatch(updateBlogFailure());
  }
};
export const addBlog = async (product, dispatch) => {
  dispatch(addBlogStart());
  try {
    const res = await userRequest.post(`/blog`, product);
    dispatch(addBlogSuccess(res.data));
  } catch (err) {
    dispatch(addBlogFailure());
  }
};

//************************************* USER **********************************/
export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get("/user");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const res = await userRequest.delete(`/user/${id}`);
    dispatch(deleteUserSuccess(res.data));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    // update
    const res = await userRequest.put(`/user/${id}`, user);
    console.log(res);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
export const addUser = async (user, dispatch) => {
  dispatch(addUserStart());
  try {
    const res = await userRequest.post(`/user`, user);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFailure());
  }
};

//*************   CATEGORY    ******************* */
export const getCategories = async (dispatch) => {
  dispatch(getCategoryStart());
  try {
    const res = await publicRequest.get("/category");
    dispatch(getCategorySuccess(res.data));
  } catch (err) {
    dispatch(getCategoryFailure());
  }
};

export const deleteCategory = async (id, dispatch) => {
  dispatch(deleteCategoryStart());
  try {
    const res = await userRequest.delete(`/category/${id}`);
    dispatch(deleteCategorySuccess(res.data));
  } catch (err) {
    dispatch(deleteCategoryFailure());
  }
};

export const updateCategory = async (id, product, dispatch) => {
  dispatch(updateCategoryStart());
  try {
    // update
    const res = await userRequest.put(`/category/${id}`, product);
    console.log(res);
    dispatch(updateCategorySuccess(res.data));
  } catch (err) {
    dispatch(updateCategoryFailure());
  }
};
export const addCategory = async (product, dispatch) => {
  dispatch(addCategoryStart());
  try {
    const res = await userRequest.post(`/category`, product);
    dispatch(addCategorySuccess(res.data));
  } catch (err) {
    dispatch(addCategoryFailure());
  }
};

//*************   COMMENT       ******************* */
export const getComments = async (dispatch) => {
  dispatch(getCommentStart());
  try {
    const res = await publicRequest.get("/comment");
    dispatch(getCommentSuccess(res.data));
  } catch (err) {
    dispatch(getCommentFailure());
  }
};

export const deleteComment = async (id, dispatch) => {
  dispatch(deleteCommentStart());
  try {
    const res = await userRequest.delete(`/comment/${id}`);
    dispatch(deleteCommentSuccess(res.data));
  } catch (err) {
    dispatch(deleteCommentFailure());
  }
};

export const updateComment = async (id, product, dispatch) => {
  dispatch(updateCommentStart());
  try {
    // update
    const res = await userRequest.put(`/comment/${id}`, product);
    console.log(res);
    dispatch(updateCommentSuccess(res.data));
  } catch (err) {
    dispatch(updateCommentFailure());
  }
};
export const addComment = async (product, dispatch) => {
  dispatch(addCommentStart());
  try {
    const res = await userRequest.post(`/comment`, product);
    dispatch(addCommentSuccess(res.data));
  } catch (err) {
    dispatch(addCommentFailure());
  }
};

export const getOrders = async (dispatch) => {
  dispatch(getOrderStart());
  try {
    const res = await publicRequest.get("/order");
    dispatch(getOrderSuccess(res.data));
  } catch (err) {
    dispatch(getOrderFailure());
  }
};

export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrderStart());
  try {
    const res = await userRequest.delete(`/order/${id}`);
    dispatch(deleteOrderSuccess(res.data));
  } catch (err) {
    dispatch(deleteOrderFailure());
  }
};

export const updateOrder = async (id, product, dispatch) => {
  dispatch(updateOrderStart());
  try {
    // update
    const res = await userRequest.put(`/order/${id}`, product);
    console.log(res);
    dispatch(updateOrderSuccess(res.data));
  } catch (err) {
    dispatch(updateOrderFailure());
  }
};
