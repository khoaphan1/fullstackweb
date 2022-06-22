import React, { useState } from "react";
import '../FormLogin/formLogin.css'
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {updateProfileUser}from "../../redux/apiRequest"
import { useDispatch, useSelector } from "react-redux";
const CryptoJS = require("crypto-js");


const FormProfile = () => {

  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser)

  const dispatch = useDispatch();


  
  const [username, setUsername] = useState(currentUser.user.username);
  const [email, setEmail] = useState(currentUser.user.username);
  const userPass = CryptoJS.AES.decrypt(
    currentUser.user.password,
    "khoa1234"
  ).toString(CryptoJS.enc.Utf8);
  console.log(userPass)

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [firstname, setFirstname] = useState(currentUser.user.firtName);
  const [lastname, setLastname] = useState(currentUser.user.lastName);
  const [phone, setPhone] = useState(currentUser.user.phone);
  const [sex, setSex] = useState(currentUser.user.sex);
  const [img, setImg] = useState();
  const [imgFinal, setImgFinal] = useState();

  const hanldeSetUsername = (e) => {
    setUsername(e.target.value);
  };
  const hanldeSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSetOldPassword = (e) => {
    setOldPassword(e.target.value);
  };
  const handleSetNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleSetRePassword = (e) => {
    setRePassword(e.target.value);
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

  const handleRegister = (e) =>{
    e.preventDefault();

    if(oldPassword !== oldPassword){
      alert('Mật khẩu cũ không trùng khớp')
    }
    else if(newPassword !== rePassword){
      alert('Mật khẩu mới không trùng mật khẩu nhập lại')
    }else{
      const newUser = {
        username,
        email,
        password: CryptoJS.AES.encrypt(
          newPassword,
          "khoa1234"
        ).toString() ,
        firtName : firstname,
        lastName : lastname,
        phone,
        sex,
        avatar : imgFinal
      }

      console.log(newUser)
      updateProfileUser(currentUser.user._id, newUser, dispatch)
      // register(dispatch, newUser);
    }
  }
  

  return (
    <>
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>Your Profile</h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <form>
                <div class="row clearfix">
                  <div class="col_half">
                    <div className="input_avata">
                      <img
                        src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/icon/logo.jpg"
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
                    disabled
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
                    disabled
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
                    name="oldpassword"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={handleSetOldPassword}
                    required
                  />
                </div>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="newpassword"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={handleSetNewPassword}
                    required
                  />
                </div>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="repassword"
                    placeholder="Repeat New Password"
                    value={rePassword}
                    onChange={handleSetRePassword}
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
                
               
                <button class="button" onClick={handleRegister} >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormProfile;
