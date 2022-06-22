import React from "react";
import {
  Dehaze,
  Search,
  Notifications,
} from "@material-ui/icons";
import { useSelector } from "react-redux";

const Header = ({name}) => {
  const admin = useSelector((state) => state.user.currentUser);
  var imgAdmin;

  if(admin){
    imgAdmin = admin.user.avatar
  }

  return (
    <nav>
      <Dehaze className="bx" />
      <a href="#" className="nav-link">
        {name}
      </a>
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn">
            <Search className="bx" />
          </button>
        </div>
      </form>
      <input type="checkbox" id="switch-mode" hidden />
      <label for="switch-mode" className="switch-mode"></label>
      <a href="#" className="notification">
        <Notifications className="bx" />
        <span className="num">8</span>
      </a>
      <a href="#" className="profile">
        <img src={imgAdmin} />
      </a>
    </nav>
  );
};

export default Header;
