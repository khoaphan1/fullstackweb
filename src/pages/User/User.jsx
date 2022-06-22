import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getUsers,
  addUser,
  updateUser,
} from "../../redux/apiCalls";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
const CryptoJS = require("crypto-js");


const User = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState("Male");
  const [isAdmin, setIsAdmin] = useState(false);
  const [img, setImg] = useState();
  const [imgFinal, setImgFinal] = useState();
  const [status, setStatus] = useState(true);

  const [idEdit, setIdEdit] = useState();
  const dispatch = useDispatch();

  const [isedit, setIsedit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const users = useSelector((state) => state.listuser.users);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

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

  const hanldeSetRole = (e) => {
    setIsAdmin(e.target.value);
  };

  const hanldeSetStatus = (e) => {
    setStatus(e.target.value);
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

  const handleCancel = () => {
    setIsOpen(false);
    setIsedit(false);
    setUsername("");
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setPhone("");
    setSex("");
    setIsAdmin(false);
    setImg();
    setImgFinal("");
    setStatus(true);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleAddUser = () => {
    const newUser = {
      username,
      email,
      password : CryptoJS.AES.encrypt(
        password,
        "khoa1234"
      ).toString(),
      firtName : firstname,
      lastName : lastname,
      phone,
      sex,
      isAdmin,
      avatar : imgFinal,
      status,
    };

    addUser(newUser, dispatch);

    console.log(newUser);
    setIsOpen(false);
    setIsedit(false);
    setUsername("");
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setPhone("");
    setSex("");
    setIsAdmin(false);
    setImg();
    setImgFinal("");
    setStatus(true);
  };

  const handleEdit = (id) => {
    setIsOpen(true);
    setIsedit(true);
    setIdEdit(id);
    console.log(id);
    const userEdit = users.find((user) => user._id === id);
    setUsername(userEdit.username);
    setEmail(userEdit.email);
    setPassword(userEdit.password);
    setPassword(CryptoJS.AES.decrypt(
      userEdit.password,
      "khoa1234"
    ).toString(CryptoJS.enc.Utf8));
    setFirstname(userEdit.firtName);
    setLastname(userEdit.lastName);
    setPhone(userEdit.phone);
    setSex(userEdit.sex);
    setIsAdmin(userEdit.isAdmin);
    setStatus(userEdit.status);
    console.log(userEdit);
  };

  const handleSave = () => {
    const userEditWithImg = {
      username,
      email,
      password : CryptoJS.AES.encrypt(
        password,
        "khoa1234"
      ).toString(),
      // password,
      firtName : firstname,
      lastName : lastname,
      phone,
      sex,
      isAdmin,
      avatar : imgFinal,
      status,
    };

    const userEditWithNoImg = {
      username,
      email,
      password: CryptoJS.AES.encrypt(
        password,
        "khoa1234"
      ).toString(),
      // password,
      firtName : firstname,
      lastName : lastname,
      phone,
      sex,
      isAdmin,
      status,
    };

    if (img) {
      updateUser(idEdit, userEditWithImg, dispatch);
    } else {
      updateUser(idEdit, userEditWithNoImg, dispatch);
    }

    setIsOpen(false);
    setIsedit(false);
    setUsername("");
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setPhone("");
    setSex("");
    setIsAdmin(false);
    setImg();
    setImgFinal("");
    setStatus(true);
  };

  console.log(users);
  return (
    <div>
      <Navbar currentItem = "user"/>

      <section id="content">
        <Header name="User"/>

        <main>
          <HeaderTitle name="User"/>

          <button className="add-new" onClick={handleOpen}>
            Add new
          </button>

          <div className="table-users table-user-main">
            <div className="header">List User</div>

            <table cellSpacing="0" className="table-main">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Id</th>
                  <th>Username</th>
                  <th>Avatar</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>Sex</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Handle</th>
                </tr>
              </thead>

              <tbody>
                {/* {displayUsers} */}
                {users.map((user, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{user._id}</td>
                    <td>{user.username}</td>
                    <td>
                      <img src={user.avatar} alt="" width="80%" />
                    </td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.firtName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.phone}</td>
                    <td>{user.sex}</td>
                  
                    <td>{user.isAdmin === true ? "quản trị viên" : "người dùng"}</td>
                    <td>{user.status === true ? "còn sử dụng" : "hết hạn"}</td>
                    <td>
                      <div className="fill-button">
                        <button
                          className="btn-handle"
                          onClick={() => handleEdit(user._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn-handle btn-delete"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </section>

      {isOpen && (
        <div className="modal">
          <div className="modal-container">
            <div className="form_wrapper">
              <div className="form_container">
                <div className="title_container">
                  <h2>Manage User</h2>
                </div>

                <div className="row clearfix">
                  <div>
                    <form>
                      <div className="row clearfix">
                        <div className="col_half">
                          <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input
                              type="text"
                              placeholder="Enter Username"
                              value={username}
                              onChange={hanldeSetUsername}
                            />
                          </div>
                        </div>
                        <div className="col_half">
                          <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input
                              type="text"
                              placeholder="Enter Password"
                              value={password}
                              onChange={handleSetPassword}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row clearfix">
                        <div className="col_half">
                          <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input
                              type="text"
                              placeholder="Enter First Name"
                              value={firstname}
                              onChange={handleSetFirstName}
                            />
                          </div>
                        </div>
                        <div className="col_half">
                          <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input
                              type="text"
                              placeholder="Enter Last Name"
                              value={lastname}
                              onChange={handleSetLastName}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row clearfix">
                        <div className="col_half">
                          <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input
                              type="text"
                              placeholder="Enter Email"
                              value={email}
                              onChange={hanldeSetEmail}
                            />
                          </div>
                        </div>
                        <div className="col_half">
                          <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input
                              type="text"
                              placeholder="Enter Phone"
                              value={phone}
                              onChange={hanldeSetPhone}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="input-group-row">
                        <div className="input-item input-item-nav">
                          <p className="input-text-name">Role</p>
                        </div>
                        <div className="input-item input-item-nav">
                          <p className="input-text-name">Status</p>
                        </div>
                        <div className="input-item input-item-nav">
                          <p className="input-text-name">Sex</p>
                        </div>
                      </div>

                      <div className="input-group-row">
                        <div className="input-item input-item-nav">
                          <select
                            className="select-group"
                            value={isAdmin}
                            onChange={hanldeSetRole}
                          >
                            <option value={true}>Admin</option>
                            <option value={false}>User</option>
                          </select>
                        </div>
                        <div className="input-item input-item-nav">
                          <select
                            className="select-group"
                            value={status}
                            onChange={hanldeSetStatus}
                          >
                            <option value={true}>Still in use</option>
                            <option value={false}>Expire</option>
                          </select>
                        </div>
                        <div className="input-item input-item-nav">
                          <div className="input-item-group">
                            <div className="input-item-group__item">
                              <input
                                className="radio-item"
                                type="radio"
                                onChange={() => setSex("Male")}
                                checked={sex === "Male"} // so sánh sex với course.id trùng thì mới cho hiển thị
                              ></input>{" "}
                              <label>Male</label>
                            </div>

                            <div className="input-item-group__item">
                              <input
                                className="radio-item"
                                type="radio"
                                onChange={() => setSex("Female")}
                                checked={sex === "Female"} // so sánh sex với course.id trùng thì mới cho hiển thị
                              ></input>{" "}
                              <label>Female</label>
                            </div>

                            <div className="input-item-group__item">
                              <input
                                className="radio-item"
                                type="radio"
                                onChange={() => setSex("Other")}
                                checked={sex === "Other"} // so sánh sex với course.id trùng thì mới cho hiển thị
                              ></input>{" "}
                              <label>Other</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <div className="input_field">
                        <p>Picture Product</p>
                        <input type="file" onChange={handleImgProduct} />
                      </div> */}
                      <div className="row clearfix">
                        <div className="col_half">
                          <div className="input_field">
                            <p>Picture Product</p>
                            <input type="file" onChange={handleImgProduct} />
                          </div>
                        </div>
                        <div className="col_half">
                          <div className="input_field">
                            <button
                              key={"add1"}
                              onClick={(e) => handleAddPicture(e)}
                              className="button btn-cancel"
                            >
                              Tải ảnh lên
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    {isedit ? (
                      <div>
                        <button
                          key={"save"}
                          onClick={handleSave}
                          className="button btn-save"
                        >
                          Lưu
                        </button>
                        <button
                          key={"cancel"}
                          onClick={handleCancel}
                          className="button btn-cancel"
                        >
                          Hủy
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          key={"add"}
                          className="button"
                          onClick={handleAddUser}
                        >
                          Thêm mới
                        </button>
                        <button
                          key={"cancel"}
                          onClick={handleCancel}
                          className="button btn-cancel"
                        >
                          Hủy
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
