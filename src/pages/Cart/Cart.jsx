import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import axios from "axios";
import { useEffect, useState } from "react";


const Cart = () => {
    const [carts, setCart] = useState([]);
    useEffect(() => {
      const getCart = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/cart");
          console.log(res.data);
          setCart(res.data);
        } catch (err) {}
      };
      getCart();
    }, []);
  
    console.log(carts)
    return (
      <div>
        <Navbar />
  
        <section id="content">
          <Header />
  
          <main>
            <HeaderTitle />
  
            <button
              className="add-new"
            >
              Add new
            </button>
            <div className="table-users">
              <div className="header">List Product</div>
  
              <table cellSpacing="0" className="table-main">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Total Product</th>
                    <th></th>
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
                  {carts.map((cart, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{cart.name}</td>
                      <td>
                        <img key={cart.id} src={cart.img[0]} alt="" width="80%" />
                      </td>
                      <td>{cart.oldprice}</td>
                      <td>{cart.price}</td>
                      <td>{cart.quantity}</td>
                      <td>{cart.inStock}</td>
                      <td>{cart.categories}</td>
                      <td>
                      <div className = "td-flex">
                              {cart.size.map((item) => (
                              <p>{item}</p>
                              ))}
                          </div>
                      
                      </td> 
                      <td>
                          <div className = "td-flex">
                              {cart.color.map((item) => (
                              <p>{item}</p>
                              ))}
                          </div>
                          
                      </td>
                      <td>
                        <p>{cart.desc}</p>
                      </td>
                      <td>
                        <div className="fill-button">
                          <button
                            className="btn-handle"
                          >
                            Edit
                          </button>
                          <button
                            className="btn-handle btn-delete"
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
        
        <div className="modal">
            <div className="modal-container" >
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
                            
                              />
                            </div>
                          </div>
                          <div className="col_half">
                            <div className="input_field">
                              <span>
                                <i aria-hidden="true" className="fa fa-user"></i>
                              </span>
                              <input type="text" placeholder="Enter Quality"  />
                            </div>
                          </div>
                        </div>
  
                        <div className="row clearfix">
                          <div className="col_half">
                            <div className="input_field">
                              <span>
                                <i aria-hidden="true" className="fa fa-user"></i>
                              </span>
                              <input type="text" placeholder="Enter Old Price" />
                            </div>
                          </div>
                          <div className="col_half">
                            <div className="input_field">
                              <span>
                                <i aria-hidden="true" className="fa fa-user"></i>
                              </span>
                              <input type="text"  placeholder="Enter New Price" />
                            </div>
                          </div>
                        </div>
  
                        <div className="row clearfix">
                          <div className="col_half">
                            <div className="input_field">
                              <span>
                                <i aria-hidden="true" className="fa fa-user"></i>
                              </span>
                              <input type="text" placeholder="Enter Company" />
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
                              />
                            </div>
                          </div>
                        </div>
  
                    
                        <div className="input_field">
                          {/* <span><i aria-hidden="true" className="fa fa-lock"></i></span> */}
                          <p>Picture Product</p>
                          <input type="file"  multiple="multiple"/>
                        </div>
                      </form>
                      <div>
                        {/* {isedit ? (
                          <div>
                            <button key={"save"} onClick={handleSave}  className="button btn-save">
                              Lưu
                            </button>
                            <button key={"cancel"}  onClick={handleCancel} className="button btn-cancel">
                              Hủy
                            </button>
                          </div>
                        ) : (
                          <button key={"add"} className="button" onClick={() =>handleAddProduct()}>
                            Thêm mới
                          </button>
                        )} */}
                        <button key={"add"} className="button">
                            Thêm mới
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>                           
  
  
  
      </div>
    );
}

export default Cart