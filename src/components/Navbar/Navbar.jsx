import React from "react";
import {
  Museum,
  Store,
  Dashboard,
  Category,
  ChatBubble,
  AttachMoneySharp,
  People,
  Settings,
  ExitToApp,
  Book
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { userLogout } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = ({currentItem}) => {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  console.log("curren" + currentItem)

  // {...currentItem === "home" ? className="active" : className=""}

  const handleLogout = () => {
    userLogout(dispatch);
    navigate("/login")
  }

  return (
    <section id="sidebar">
      <Link to="/" className="brand">
        <Museum className="bx" />
        <span className="text">AdminHub</span>
      </Link>
      <ul className="side-menu top">
        <li className={currentItem === "home" ? "active" : ""} >
          <Link to="/">
            <Dashboard className="bx" />
            <span className="text">Dashboard</span>
          </Link>
        </li>
        <li className={currentItem === "product" ? "active" : ""}>
          <Link to="/product">
            <Store className="bx" />
            <span className="text">Shop</span>
          </Link>
        </li>
        <li className={currentItem === "category" ? "active" : ""}>
          <Link to="/category">
            <Category className="bx" />
            <span className="text">Category</span>
          </Link>
        </li>
        <li className={currentItem === "comment" ? "active" : ""}>
          <Link to="/comment">
            <ChatBubble className="bx" />
            <span className="text">Comment</span>
          </Link>
        </li>
        <li className={currentItem === "blog" ? "active" : ""}>
          <Link to="/blog">
            <Book className="bx" />
            <span className="text">Blog</span>
          </Link>
        </li>

        <li className={currentItem === "order" ? "active" : ""}>
          <Link to="/order">
            <AttachMoneySharp className="bx" />
            <span className="text">Order</span>
          </Link>
        </li>
        <li className={currentItem === "user" ? "active" : ""}>
          <Link to="/user">
            <People className="bx" />
            <span className="text">User</span>
          </Link>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#">
            <Settings className="bx" />
            <span className="text">Settings</span>
          </a>
        </li>
        <li>
          <a href="#" className="logout" onClick={handleLogout}>
            <ExitToApp className="bx" />
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
