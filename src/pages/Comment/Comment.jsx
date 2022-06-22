import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  getComments,
  addComment,
  updateComment,
  getBlogs,
  getProducts
} from "../../redux/apiCalls";

const Comment = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    getBlogs(dispatch);
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [star, setStar] = useState(5);
  const [category, setCategory] = useState("product");
  const [itemId, setItemId] = useState(blogs[0]._id);

  const [idEdit, setIdEdit] = useState();

  const [isedit, setIsedit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const comments = useSelector((state) => state.comment.comments);

  useEffect(() => {
    getComments(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteComment(id, dispatch);
  };

  const hanldeSetAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleSetContent = (e) => {
    setContent(e.target.value);
  };

  const hanldeSetStar = (e) => {
    setStar(e.target.value);
  };
  const handleSetCategory = (e) => {
    setCategory(e.target.value);
  };

  const hanldeSetItemId = (e) => {
    setItemId(e.target.value);
    console.log(e.target.value);
    console.log(itemId);

  };

  const handleCancel = () => {
    setIsOpen(false);
    setIsedit(false);
    setContent("");
    setAuthor("");
    setStar(5);
    setCategory("blog");
    setItemId("");
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleAddComment = () => {
    const newComment = {
      author,
      content,
      star,
      itemId,
      category,
    };

    addComment(newComment, dispatch);

    console.log(newComment);
    setIsOpen(false);
    setIsedit(false);
    setContent("");
    setAuthor("");
    setStar(5);
    setCategory("blog");
    setItemId("");
  };

  const handleEdit = (id) => {
    setIsOpen(true);
    setIsedit(true);
    setIdEdit(id);
    console.log(id);
    const commentEdit = comments.find((comment) => comment._id === id);
    setContent(commentEdit.content);
    setAuthor(commentEdit.author);
    setStar(commentEdit.star);
    setCategory(commentEdit.category);
    setItemId(commentEdit.itemId);

    console.log(commentEdit);
  };

  const handleSave = () => {
    const commentEdit = {
      author,
      content,
      star,
      itemId,
      category,
    };

    updateComment(idEdit, commentEdit, dispatch);

    setIsOpen(false);
    setIsedit(false);
    setContent("");
    setAuthor("");
    setStar(5);
    setCategory("blog");
    setItemId("");
  };

  console.log(comments);
  return (
    <div>
      <Navbar currentItem = "comment"/>

      <section id="content">
        <Header name="Comment" />

        <main>
          <HeaderTitle name="Comment" />

          <button className="add-new" onClick={handleOpen}>
            Add new
          </button>
          <div className="table-users">
            <div className="header">List Comment</div>

            <table cellSpacing="0" className="table-main">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Author</th>
                  <th>Item ID</th>
                  <th>Content</th>
                  <th>Star</th>
                  <th>Category</th>
                </tr>
              </thead>

              <tbody>
                {/* {displayUsers} */}
                {comments.map((cmt, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{cmt.author}</td>
                    <td>{cmt.itemId}</td>
                    <td>
                      <p>{cmt.content}</p>
                    </td>
                    <td>{cmt.star}</td>
                    <td>{cmt.category}</td>
                    <td>
                      <div className="fill-button">
                        <button
                          className="btn-handle"
                          onClick={() => handleEdit(cmt._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn-handle btn-delete"
                          onClick={() => handleDelete(cmt._id)}
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
                  <h2>Manage Blog</h2>
                </div>

                <div className="row clearfix">
                  <div>
                    <form>
                      {/* <div className="row clearfix">
                        <div className="col_half">
                          <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input
                              type="text"
                              placeholder="Enter Author"
                              value={author}
                              onChange={hanldeSetAuthor}
                            />
                          </div>
                        </div>
                      </div> */}

                      <div className="input_field">
                        <span>
                          <i aria-hidden="true" className="fa fa-user"></i>
                        </span>
                        <input
                          type="text"
                          placeholder="Enter Author"
                          value={author}
                          onChange={hanldeSetAuthor}
                        />
                      </div>

                      <div className="input-group-row">
                        <div className="input-item input-item-nav">
                          <select
                            className="select-group"
                            value={category}
                            onChange={handleSetCategory}
                          >
                            <option value={"blog"}>Blog</option>
                            <option value={"product"}>Product</option>
                          </select>
                        </div>
                      </div>

                      <div className="input-group-row">
                        <div className="input-item input-item-nav">
                          <select
                            className="select-group"
                            value={itemId}
                            onChange={hanldeSetItemId}
                          >
                            {category === "blog"
                              ? blogs.map((blog) => (
                                  <option value={blog._id}>{blog._id}</option>
                                ))
                              : products.map((pro) => (
                                  <option value={pro._id}>{pro._id}</option>
                                ))}
                          </select>
                        </div>
                      </div>

                      <div className="input-group-row">
                        <div className="input-item input-item-nav">
                          <select
                            className="select-group"
                            value={star}
                            onChange={hanldeSetStar}
                          >
                            <option value={1}>1 Star</option>
                            <option value={2}>2 Star</option>
                            <option value={3}>3 Star</option>
                            <option value={4}>4 Star</option>
                            <option value={5}>5 Star</option>
                          </select>
                        </div>
                      </div>

                      <div className="input_field">
                        <span>
                          <i aria-hidden="true" className="fa fa-user"></i>
                        </span>
                        <input
                          type="text"
                          placeholder="Enter Content"
                          value={content}
                          onChange={handleSetContent}
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
                          onClick={handleAddComment}
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

export default Comment;
