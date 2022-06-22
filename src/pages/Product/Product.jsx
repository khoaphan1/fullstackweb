import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProducts,
  addProduct,
  updateProduct,
  userLogout,
  getCategories,
} from "../../redux/apiCalls";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

const Product = () => {
  const listcate = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    getCategories(dispatch);
  }, [dispatch]);

  console.log(listcate[0].name);

  const [name, setName] = useState("");
  const [oldPrice, setOldPrice] = useState();
  const [price, setPrice] = useState();
  const [quality, setQuality] = useState();
  const [category, setCategory] = useState(listcate[0].name);
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [listImg, setListImg] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  const [idEdit, setIdEdit] = useState();

  const [isedit, setIsedit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const listcate = useSelector((state) => state.category.categories);

  // useEffect(() => {
  //   getCategories(dispatch);
  // }, [dispatch]);

  const handleColor = (e) => {
    setColor(e.target.value.split(","));
  };

  const handleSize = (e) => {
    setSize(e.target.value.split(","));
  };

  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    // const productDelete = products.find((product) => product._id === id);
    // console.log(productDelete);
    // products.filter(
    //   (product) => product._id !== id
    // );
    deleteProduct(id, dispatch);
  };

  const hanldeSetName = (e) => {
    setName(e.target.value);
  };
  const hanldeSetQuality = (e) => {
    setQuality(e.target.value);
  };
  const hanldeSetOldPrice = (e) => {
    setOldPrice(e.target.value);
  };
  const hanldeSetPrice = (e) => {
    setPrice(e.target.value);
  };

  const hanldeSetDescription = (e) => {
    setDescription(e.target.value);
  };

  const hanldeSetCategory = (e) => {
    setCategory(e.target.value);
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
          listImg.push(downloadURL);
          setListImg(listImg);
        });
      }
    );

    console.log(listImg);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setIsedit(false);
    setName("");
    setQuality("");
    setOldPrice("");
    setPrice("");
    setCategory("");
    setDescription("");
    setColor("");
    setSize("");
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleAddProduct = () => {
    const input1 = {
      name,
      oldprice: Number(oldPrice),
      price: Number(price),
      quantity: Number(quality),
      categories: category,
      size: size,
      desc: description,
      color: color,
      img: listImg,
    };

    addProduct(input1, dispatch);

    console.log(input1);
    setIsOpen(false);
    setIsedit(false);
    setName("");
    setQuality("");
    setOldPrice("");
    setPrice("");
    setCategory("");
    setColor("");
    setSize("");
    setDescription("");
  };

  const handleEdit = (id) => {
    setIsOpen(true);
    setIsedit(true);
    setIdEdit(id);
    console.log(id);
    const productEdit = products.find((product) => product._id === id);
    console.log(productEdit);
    setName(productEdit.name);
    setQuality(productEdit.quantity);
    setOldPrice(productEdit.oldprice);
    setPrice(productEdit.price);
    setCategory(productEdit.categories);
    setDescription(productEdit.desc);
    setColor(productEdit.color.join(","));
    setSize(productEdit.size.join(","));
  };

  const handleSave = () => {
    const productEditWithImg = {
      name,
      oldprice: Number(oldPrice),
      price: Number(price),
      quantity: Number(quality),
      categories: category,
      size: size,
      desc: description,
      color: color,
      img: listImg,
    };

    const productEditNoImg = {
      name,
      oldprice: Number(oldPrice),
      price: Number(price),
      quantity: Number(quality),
      categories: category,
      size: size,
      desc: description,
      color: color,
    };
    if (listImg.length === 0) {
      updateProduct(idEdit, productEditNoImg, dispatch);
    } else {
      updateProduct(idEdit, productEditWithImg, dispatch);
    }

    setIsOpen(false);
    setIsedit(false);
    setName("");
    setQuality("");
    setOldPrice("");
    setPrice("");
    setCategory("");
    setColor("");
    setSize("");
    setDescription("");
  };

  const handleLogout = () => {
    userLogout(dispatch);
  };

  console.log(products);
  return (
    <div>
      <Navbar currentItem = "product" />

      <section id="content">
        <Header name="Product"/>

        <main>
          <HeaderTitle name="Product" />

          <button className="add-new" onClick={handleOpen}>
            Add new
          </button>

          <div className="table-users">
            <div className="header">List Product</div>

            <table cellSpacing="0" className="table-main">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Picture</th>
                  <th>Old Price</th>
                  <th>New Price</th>
                  <th>Quantity</th>
                  <th>In Stoke</th>
                  <th>Category</th>
                  <th>Size</th>
                  <th>Color</th>
                  <th>Description</th>
                  <th>Handle</th>
                </tr>
              </thead>

              <tbody>
                {/* {displayUsers} */}
                {products.map((pro, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{pro.name}</td>
                    <td>
                      <img src={pro.img[0]} alt="" width="80%" />
                    </td>
                    <td>{pro.oldprice}</td>
                    <td>{pro.price}</td>
                    <td>{pro.quantity}</td>
                    <td>{pro.inStock}</td>
                    <td>{pro.categories}</td>
                    <td>
                      <div className="td-flex">
                        {pro.size.map((item) => (
                          <p>{item}</p>
                        ))}
                      </div>
                    </td>
                    <td>
                      <div className="td-flex">
                        {pro.color.map((item) => (
                          <p>{item}</p>
                        ))}
                      </div>
                    </td>
                    <td>
                      <p>{pro.desc}</p>
                    </td>
                    <td>
                      <div className="fill-button">
                        <button
                          className="btn-handle"
                          onClick={() => handleEdit(pro._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn-handle btn-delete"
                          onClick={() => handleDelete(pro._id)}
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
                  <h2>Manage Shop</h2>
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
                              placeholder="Enter Product Name"
                              value={name}
                              onChange={hanldeSetName}
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
                              placeholder="Enter Quanlity"
                              value={quality}
                              onChange={hanldeSetQuality}
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
                              value={oldPrice}
                              placeholder="Enter Old Price"
                              onChange={hanldeSetOldPrice}
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
                              placeholder="Enter New Price"
                              value={price}
                              onChange={hanldeSetPrice}
                            />
                          </div>
                        </div>
                      </div>

                      {/* <div className="">
                        <div className="input-group-row">
                          <div className="input-item input-item-nav">
                            <select
                              className="select-group"
                              value={category}
                              onChange={hanldeSetCategory}
                            >
                              {listcate.map((cate) => (
                                <option value={cate.name}>{cate.name}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div> */}

                      <div className="row clearfix">
                        <div className="col_half">
                          {/* <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input
                              type="text"
                              placeholder="Enter Category"
                              value={category}
                              onChange={hanldeSetCategory}
                            />
                          </div> */}
                          <div className="input-group-row">
                            <div className="input-item input-item-nav">
                              <select
                                className="select-group"
                                value={category}
                                onChange={hanldeSetCategory}
                              >
                                {listcate.map((cate) => (
                                  <option value={cate.name}>{cate.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col_half">
                          <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input
                              type="text"
                              placeholder="Enter Description"
                              value={description}
                              onChange={hanldeSetDescription}
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
                              placeholder="Enter Color"
                              value={color}
                              onChange={handleColor}
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
                              placeholder="Enter Size"
                              value={size}
                              onChange={handleSize}
                            />
                          </div>
                        </div>
                      </div>

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
                              Thêm vào danh sách hình ảnh
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
                          onClick={() => handleAddProduct()}
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

export default Product;
