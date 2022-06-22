import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  getCategories,
  addCategory,
  updateCategory,
} from "../../redux/apiCalls";

const Category = () => {
  const [name, setName] = useState("");

  const [idEdit, setIdEdit] = useState();
  const dispatch = useDispatch();

  const [isedit, setIsedit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    getCategories(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteCategory(id, dispatch);
  };

  const hanldeSetName = (e) => {
    setName(e.target.value);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setIsedit(false);
    setName("");
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleAddCategory = () => {
    const newCategory = {
      name,
    };

    addCategory(newCategory, dispatch);

    console.log(newCategory);
    setIsOpen(false);
    setIsedit(false);
    setName("");
  };

  const handleEdit = (id) => {
    setIsOpen(true);
    setIsedit(true);
    setIdEdit(id);
    console.log(id);
    const categoryEdit = categories.find((category) => category._id === id);
    setName(categoryEdit.name);
    console.log(categoryEdit);
  };

  const handleSave = () => {
    const categoryEdit = {
      name,
    };

    updateCategory(idEdit, categoryEdit, dispatch);

    setIsOpen(false);
    setIsedit(false);
    setName("");
  };

  console.log(categories);
  return (
    <div>
      <Navbar currentItem = "category"/>

      <section id="content">
        <Header name="Categories" />

        <main>
          <HeaderTitle name="Categories" />

          <button className="add-new" onClick={handleOpen}>
            Add new
          </button>

          <div className="table-users">
            <div className="header">List Categories</div>

            <table cellSpacing="0" className="table-main">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Handle</th>
                </tr>
              </thead>

              <tbody>
                {/* {displayUsers} */}
                {categories.map((cate, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{cate.name}</td>
                    <td>
                      <div className="fill-button">
                        <button
                          className="btn-handle"
                          onClick={() => handleEdit(cate._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn-handle btn-delete"
                          onClick={() => handleDelete(cate._id)}
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
                  <h2>Manage Category</h2>
                </div>

                <div className="row clearfix">
                  <div>
                    <form>
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
                          onClick={handleAddCategory}
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

export default Category;
