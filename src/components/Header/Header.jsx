import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import {
  Search,
  LocalMallOutlined,
  FavoriteBorderSharp,
  PersonOutline,
  Dehaze,
  DehazeOutlined,
  Delete,
} from "@material-ui/icons";
import { Link, Navigate } from "react-router-dom";
import { userLogout } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import { useState } from "react";
import { editProduct,deleteProduct, resetProduct } from "../../redux/cartSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [openNav, setOpenNav] = useState(false);
  const [openOpacity, setOpenOpacity] = useState(false);

  const cart = useSelector((state) => state.cart);

  const handleDeleteItem = (myid) => {
    dispatch(
      deleteProduct(myid)
    )
  }

  const quantity = useSelector((state) => state.cart).quantity;
  const user = useSelector((state) => state.user.currentUser);
  console.log(quantity);
  // console.log(user.user.avatar)
  // const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // var trang = 1;
  // var tongItem = 5;
  // for (let i = (trang - 1) * tongItem; i < trang * tongItem; i++) {
  //   console.log(mang[i]);
  // }

  const handleLogout = () => {
    // <Link  to = "/"/>
    userLogout(dispatch);
    dispatch(resetProduct());
  };

  return (
    <div className="Header__main">
      <div className="Header__container">
        <div className="Header__wrapper">
          <div className="Header__left">
            <div
              className="Header__mobile"
              onClick={() => setOpenNav(!openNav)}
            >
              <DehazeOutlined />
            </div>
            <div className="Header__logo">
              <img
                src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/logo.png?v=1648723388"
                alt=""
              />
            </div>
            <div className="Header__nav">
              <div className="Header__navItem">
                <Link to="/">HOME</Link>
              </div>
              <div className="Header__navItem">
                <Link to="/shop">SHOP</Link>
              </div>
              <div className="Header__navItem">
                <Link to="/blogs">BLOG</Link>
              </div>
              

              {/* <button onClick={handleLogout}>logout</button> */}
            </div>
          </div>
          <div className="Header__right">
            
            {/* <Link to={`/profile/${user.user._id}`}> */}
            <div className="Header__menuItemNav Header__menuItemNavHidden">
              {user ? (
                <div className="Header__menuItemNav__main-item">
                  <img
                    alt=""
                    src={user.user?.avatar}
                    className="Header__avatar"
                  />
                  <div className="Header__main-sub-nav">
                    <div className="Header__list-sub-nav">
                      <div className="Header__item-sub-nav">
                        <p>
                          Welcome, {user.user.firtName} {user.user.lastName}{" "}
                        </p>
                      </div>
                      <div className="Header__item-sub-nav">
                        <Link to="/cart">Cart</Link>
                      </div>
                      <div className="Header__item-sub-nav">
                        <Link to={`/profile/${user.user._id}`}>Your Info</Link>
                      </div>
                      <div className="Header__line"></div>
                      <div className="Header__item-sub-nav">
                        <Link to="/" onClick={handleLogout}>
                          logout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="Header__menuItemNav__main-item">
                  <Badge>
                    <PersonOutline style={{ fontSize: "25px" }} />
                  </Badge>
                  <div className="Header__main-sub-nav">
                    <div className="Header__list-sub-nav">
                      <div className="Header__item-sub-nav">
                        <Link to="/login">Login</Link>
                      </div>
                      <div className="Header__line"></div>
                      <div className="Header__item-sub-nav">
                        <Link to="/register">Register</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
              
            <div className="Header__menuItemNav" onClick={() => setOpenOpacity(true)}>
              <Badge>
                <LocalMallOutlined style={{ fontSize: "25px" }} />
              </Badge>
            </div>
          </div>
        </div>
      </div>
      {/* {openNav && (
        <div id="mySidenav" className="sidenav">
          <p class="closebtn" onClick={() => setOpenNav(false)}>
            &times;
          </p>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      )} */}

      <div id="mySidenav" className={openNav ? "sidenav active" : "sidenav"}>
        <p class="closebtn" onClick={() => setOpenNav(false)}>
          &times;
        </p>
        <div className="group-link">
          <div className="group-link-top">
            <div className="avata-in-mobile">
              {user ? (
                <div className="avata-in-mobile-and-name">
                  <img
                    alt=""
                    src={user.user?.avatar}
                    className="Header__avatar"
                  />{" "}
                  <span>
                    {user.user?.firtName} {user.user?.lastName}{" "}
                  </span>
                </div>
              ) : (
                <Badge>
                  <PersonOutline style={{ fontSize: "25px" }} />
                </Badge>
              )}
            </div>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/blogs">Blog</Link>
            {user ? (
              <Link to={`/profile/${user.user._id}`}>Your Profile</Link>
            ) : (
              <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            )}
          </div>
          <div className="group-link-bottom">
            {user ? (
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <div></div>
            )}
            {/* <Link to="/" onClick={handleLogout}>
              Logout
            </Link> */}
          </div>
        </div>

        {/* <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a> */}
      </div>
      {openOpacity && <div className="opacity"></div>}
      {openOpacity && (
        <div className="list-shopping-cart">
          <div className="list-shopping-cart-main">
            <div className="list-shopping-cart-top">
              <div className="list-shopping-cart-header">
                <div className="list-shopping-cart-close" onClick={() => setOpenOpacity(false)}>X</div>
                <div className="list-shopping-cart-shop">Shopping Cart</div>
                <div className="list-shopping-cart-quan">{cart.products.length}</div>
              </div>
              <div className="list-shopping-cart-body">
                <div className="list-shopping-cart-list">
                  {cart.products.map((item, index) => (
                    <div className="list-shopping-cart-item">
                    <div className="list-shopping-cart-left">
                      <img
                        src={item.img[0]}
                        alt=""
                        className="list-shopping-cart-img"
                      />
                      <div className="list-shopping-cart-info">
                        <div className="list-shopping-cart-info-name">
                          {item.name}
                        </div>
                        <div className="list-shopping-cart-info-qty">
                          QTY : {item.quantity}
                        </div>
                        <div className="list-shopping-cart-info-total">
                          ${item.price}.00
                        </div>
                      </div>
                    </div>
                    <div className="list-shopping-cart-right" onClick={() => handleDeleteItem(index)}>
                      <Delete className="list-shopping-cart-right-icon"/>
                    </div>
                  </div>
                  ))}
                  
                </div>
                <div className="list-shopping-cart-sub-total">
                  <p>Total:</p>
                  <h2>${cart.total}.00</h2>
                </div>
                <div class="action-checkout">
                  <a href="/cart" class="button-viewcart">
                    <span>View cart</span>
                  </a>
                  <a href="/checkout" class="button-checkout">
                    <span>Check out</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
