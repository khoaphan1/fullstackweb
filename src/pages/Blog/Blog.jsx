import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBlog,
  getBlogs,
  addBlog,
  updateBlog,
} from "../../redux/apiCalls";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

const Blog = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState();
  const [imgFinal, setImgFinal] = useState();
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [desc, setDesc] = useState("");
  const [view, setView] = useState("");

  const [idEdit, setIdEdit] = useState();
  const dispatch = useDispatch();

  const [isedit, setIsedit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const blogs = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    getBlogs(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteBlog(id, dispatch);
  };

  const hanldeSetName = (e) => {
    setName(e.target.value);
  };
  const hanldeSetAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleSetContent = (e) => {
    setContent(e.target.value);
  };
  const handleSetDesc = (e) => {
    setDesc(e.target.value);
  };

  const hanldeSetView = (e) => {
    setView(e.target.value);
  };

  const hanldeSetTag = (e) => {
    setTag(e.target.value);
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
    setName("");
    setAuthor("");
    setContent("");
    setDesc("");
    setTag("");
    setView("");
    setImg();
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleAddBlog = () => {
    const newBlog = {
      name,
      author,
      content,
      tag,
      desc,
      view: Number(view),
      img: imgFinal,
    };

    addBlog(newBlog, dispatch);

    console.log(newBlog);
    setIsOpen(false);
    setIsedit(false);
    setName("");
    setAuthor("");
    setContent("");
    setDesc("");
    setTag("");
    setView("");
    setImg();
  };

  const handleEdit = (id) => {
    setIsOpen(true);
    setIsedit(true);
    setIdEdit(id);
    console.log(id);
    const blogEdit = blogs.find((blog) => blog._id === id);
    setName(blogEdit.name);
    setAuthor(blogEdit.author);
    setContent(blogEdit.content);
    setDesc(blogEdit.desc);
    setTag(blogEdit.tag);
    setView(blogEdit.view);
    console.log(blogEdit);
  };

  const handleSave = () => {
    const blogEditWithImg = {
      name,
      author,
      content,
      tag,
      desc,
      view: Number(view),
      img: imgFinal,
    };

    const blogEditWithNoImg = {
      name,
      author,
      content,
      tag,
      desc,
      view: Number(view),
    };

    if (img) {
      updateBlog(idEdit, blogEditWithImg, dispatch);
    } else {
      updateBlog(idEdit, blogEditWithNoImg, dispatch);
    }

    setIsOpen(false);
    setIsedit(false);
    setName("");
    setAuthor("");
    setContent("");
    setDesc("");
    setTag("");
    setView("");
    setImg();
  };

  console.log(blogs);
  return (
    <div>
      <Navbar currentItem = "blog"/>

      <section id="content">
        <Header name="Blog" />

        <main>
          <HeaderTitle name="Blog" />

          <button className="add-new" onClick={handleOpen}>
            Add new
          </button>

          <div className="table-users">
            <div className="header">List Blog</div>

            <table cellSpacing="0" className="table-main">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Thumbnail</th>
                  <th>Author</th>
                  <th>Content</th>
                  <th>Tag</th>
                  <th>Description</th>
                  <th>View</th>
                  <th>Handle</th>
                </tr>
              </thead>

              <tbody>
                {/* {displayUsers} */}
                {blogs.map((blog, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{blog._id}</td>
                    <td>{blog.name}</td>
                    <td>
                      <img src={blog.img} alt="" width="80%" />
                    </td>
                    <td>{blog.author}</td>
                    <td>
                      <p>{blog.content}</p>
                    </td>
                    <td>{blog.tag}</td>
                    <td>
                      <p>{blog.desc}</p>
                    </td>
                    <td>{blog.view}</td>
                    <td>
                      <div className="fill-button">
                        <button
                          className="btn-handle"
                          onClick={() => handleEdit(blog._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn-handle btn-delete"
                          onClick={() => handleDelete(blog._id)}
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
                              placeholder="Enter Author"
                              value={author}
                              onChange={hanldeSetAuthor}
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
                              placeholder="Enter Tag Name"
                              value={tag}
                              onChange={hanldeSetTag}
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
                              placeholder="Enter View"
                              value={view}
                              onChange={hanldeSetView}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="input_field">
                        <span>
                          <i aria-hidden="true" className="fa fa-envelope"></i>
                        </span>
                        <input
                          type="text"
                          placeholder="Enter Content"
                          value={content}
                          onChange={handleSetContent}
                        />
                      </div>

                      <div className="input_field">
                        <span>
                          <i aria-hidden="true" className="fa fa-envelope"></i>
                        </span>
                        <input
                          type="text"
                          placeholder="Enter Description"
                          value={desc}
                          onChange={handleSetDesc}
                        />
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
                          onClick={handleAddBlog}
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

export default Blog;
