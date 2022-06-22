import React, { useState } from "react";
import "../FormLogin/formLogin.css";
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {register}from "../../redux/apiRequest"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CryptoJS = require("crypto-js");


const FormRegister = () => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    console.log(checked);
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState("Female");
  const [img, setImg] = useState();
  const [imgFinal, setImgFinal] = useState();

  const hanldeSetUsername = (e) => {
    setUsername(e.target.value);
  };
  const hanldeSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSetFirstName = (e) => {
    setFirstname(e.target.value);
  };

  const handleSetLastName = (e) => {
    setLastname(e.target.value);
  };

  const hanldeSetPhone = (e) => {
    setPhone(e.target.value);
  };

  const handleImgProduct = (e) => {
    setImg(e.target.files[0]);
  };

  const handleAddPicture = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + img.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, img);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgFinal(downloadURL);
          //   listImg.push(downloadURL);
          //   setListImg(listImg);
        });
      }
    );

    console.log(imgFinal);
  };

  const handleRegister = () =>{

    const newUser = {
      username,
      email,
      password ,
      firtName : firstname,
      lastName : lastname,
      phone,
      sex,
      avatar : imgFinal
    }

    console.log(newUser)

    register(dispatch, newUser);

    alert("Đăng kí thành công, hãy đăng nhập để mua hàng")
  }
  

  return (
    <>
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2> Registration </h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <form>
                <div class="row clearfix">
                  <div class="col_half">
                    <div className="input_avata">
                      <img
                        src={imgFinal ? imgFinal : "https://template.hasthemes.com/naturecircle/naturecircle/assets/img/icon/logo.jpg"}
                        alt=""
                        className="input-avatar-user"
                      />
                      <input
                        type="file"
                        onChange={handleImgProduct}
                        required
                      />
                    </div>
                  </div>
                  <div class="col_half">
                    <button onClick={(e) => handleAddPicture(e)} >Upload avatar</button>
                  </div>
                </div>

                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={hanldeSetUsername}
                  />
                </div>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={hanldeSetEmail}
                    required
                  />
                </div>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={hanldeSetPhone}
                    placeholder="Your Phone"
                    required
                  />
                </div>
                {/* <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-envelope"></i>
                  </span>
                  <input
                    type="date"
                    name="date"
                    placeholder="Date of birth"
                    required
                  />
                </div> */}
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleSetPassword}
                    required
                  />
                </div>

                <div class="row clearfix">
                  <div class="col_half">
                    <div class="input_field">
                      {" "}
                      <span>
                        <i aria-hidden="true" class="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={firstname}
                        onChange={handleSetFirstName}
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div class="col_half">
                    <div class="input_field">
                      {" "}
                      <span>
                        <i aria-hidden="true" class="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={handleSetLastName}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="input_field radio_option">
                  {/* <input type="radio" name="radiogroup1" id="rd1" />
                  <label for="rd1">Male</label>
                  <input type="radio" name="radiogroup1" id="rd2" />
                  <label for="rd2">Female</label> */}
                  <div className="input-item-group">
                    <div className="input-item-group__item">
                      <input
                        className="radio-item"
                        type="radio"
                        onChange={() => setSex("Male")}
                        checked={sex === "Male"} // so sánh sex với course.id trùng thì mới cho hiển thị
                      ></input>{" "}
                      <label onClick={() => setSex("Male")}>Male</label>
                    </div>

                    <div className="input-item-group__item">
                      <input
                        className="radio-item"
                        type="radio"
                        onChange={() => setSex("Female")}
                        checked={sex === "Female"} // so sánh sex với course.id trùng thì mới cho hiển thị
                        
                      ></input>{" "}
                      <label onClick={() => setSex("Female")}>Female</label>
                    </div>

                    <div className="input-item-group__item">
                      <input
                        className="radio-item"
                        type="radio"
                        onChange={() => setSex("Other")}
                        checked={sex === "Other"} // so sánh sex với course.id trùng thì mới cho hiển thị
                      ></input>{" "}
                      <label onClick={() => setSex("Other")}>Other</label>
                    </div>
                  </div>
                </div>
                
                <div class="input_field checkbox_option">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChecked}
                    id="cb1"
                  />
                  <label for="cb1">I agree with terms and conditions</label>
                </div>
                <Link to = "/login" className="link-btn-form">
                  <button onClick={handleRegister} className="button-form" >
                    Register
                  </button>
                </Link>
                {/* <button class="button-form" onClick={handleRegister} >
                  <Link to = "/login">Register</Link>
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
