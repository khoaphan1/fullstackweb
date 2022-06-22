import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrders, updateOrder } from "../../redux/apiCalls";

const Order = () => {
  const [name, setName] = useState("");

  const [idEdit, setIdEdit] = useState();
  const dispatch = useDispatch();

  const [isedit, setIsedit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [statusItem, setStatusItem] = useState("pendding");

  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteOrder(id, dispatch);
  };

  const hanldeSetName = (e) => {
    setName(e.target.value);
  };

  const hanldeSetStatusItem = (e) => {
    setStatusItem(e.target.value);
    console.log(statusItem);
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
      status: statusItem,
    };

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
    const orderEdit = orders.find((order) => order._id === id);
    setStatusItem(orderEdit.status);
    console.log(orderEdit);
  };

  const handleSave = () => {
    const orderEdit = {
      status: statusItem,
    };

    updateOrder(idEdit, orderEdit, dispatch);
    setIsOpen(false);
    setIsedit(false);
    setName("");
  };

  console.log(orders);
  return (
    <div>
      <Navbar currentItem="order" />

      <section id="content">
        <Header name="Orders" />

        <main>
          <HeaderTitle name="Orders" />

          {/* <button className="add-new" onClick={handleOpen}>
            Add new
          </button> */}

          <div className="table-users">
            <div className="header">List Orders</div>

            <table cellSpacing="0" className="table-main">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Id</th>
                  <th>Total Products</th>
                  <th>Total Bill</th>
                  <th>Name Receiver</th>
                  <th>Id User</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Note</th>
                  <th>Status</th>
                  <th>Handle</th>
                </tr>
              </thead>

              <tbody>
                {/* {displayUsers} */}
                {orders.map((order, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{order._id}</td>
                    <td>{order.products.length}</td>
                    <td>{order.totalBill}</td>
                    <td>{order.nameReceiver}</td>
                    <td>{order.userId}</td>
                    <td>{order.address}</td>
                    <td>{order.phone}</td>
                    <td>{order.note}</td>
                    <td>{order.status}</td>
                    <td>
                      <div className="fill-button">
                        <button
                          className="btn-handle"
                          onClick={() => handleEdit(order._id)}
                          disabled = {order.status === "pay online"}
                        >
                          Edit
                        </button>
                        <button
                          className="btn-handle btn-delete"
                          onClick={() => handleDelete(order._id)}
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
                        
                          <div className="input-item input-item-nav">
                            <select
                              className="select-group"
                              value={statusItem}
                              onChange={hanldeSetStatusItem}
                            >
                              <option value={"pendding"}>Pending</option>
                              <option value={"shipping"}>Shipping</option>
                              <option value={"delived"}>Delived</option>
                            </select>
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

export default Order;
