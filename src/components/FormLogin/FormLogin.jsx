import React from "react";
import { useState } from "react";
import './formLogin.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {login}from "../../redux/apiRequest"

const FormLogin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = () => {
    login(dispatch, { username, password });
    alert("Đăng nhập thành công, Chúc bạn mua hàng vui vẻ")
  };
  return (
    <>
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2> Login </h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <form>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
        
                <Link to = "/" className="link-btn-form">
                  <button onClick={handleClick} className="button-form" >
                    Login
                  </button>
                </Link>

                
                
                {error && <p>Something went wrong...</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
