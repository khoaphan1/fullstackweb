import React from "react";
import "./checkoutForm.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../../requestMethod";
import StripeCheckout from "react-stripe-checkout";
import { addOrder, getOrders } from "../../redux/apiRequest";
import { resetProduct } from "../../redux/cartSlice";

const KEY =
  "pk_test_51L3lBoKviup5I1Ak2gJd1uwFT2UPzSGARfzz1uvO6FLvUiaRsg1qAZnqMuQtzEQ9cA2ei0THkNHcrWdaIoHfXGGz00DCcfb7B2";
console.log(KEY);

const CheckoutForm = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);

  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  console.log(orders);

  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  console.log(stripeToken);

  console.log(cart);
  console.log(currentUser);

  const [nameReceiver, setNameReceiver] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const handleNameReceiver = (e) => {
    setNameReceiver(e.target.value);
  };

  const handleSetPhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSetAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSetNote = (e) => {
    setNote(e.target.value);
  };

  const handleOrder = () => {
    var newOrder111 = {
      userId: currentUser.user._id,
      products: cart.products,
      totalBill: cart.total + 5,
      nameReceiver: nameReceiver,
      address: address,
      phone: phone,
      note: note,
    };

    console.log(newOrder111);

    addOrder(newOrder111, dispatch);

    setNameReceiver("");
    setPhone("");
    setAddress("");
    setNote("");

    dispatch(resetProduct());
    navigate("/success");

    // alert("Đặt hàng thành công");
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        const onlineOrder = {
          userId: currentUser.user._id,
          products: cart.products,
          totalBill: cart.total + 5,
          nameReceiver: nameReceiver,
          address: address,
          phone: phone,
          note: note,
          status: "pay online",
        };

        addOrder(onlineOrder, dispatch);
        navigate("/success", {
          state: {
            stripeData: res.data,
            info: {
              nameReceiver,
              phone,
              address,
              note,
            },
            products: cart,
          },
        });

        setNameReceiver("");
        setPhone("");
        setAddress("");
        setNote("");
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  return (
    <div className="Checkout">
      <div className="Checkout__main">
        <div className="Checkout__left">
          <p className="Checkout__left-text">Your Infomation</p>
          <div className="Checkout__left-item">
            <div className="Checkout__left-name">Name Receiver</div>
            <input
              type="text"
              value={nameReceiver}
              onChange={handleNameReceiver}
              className="Checkout__left-input"
            />
          </div>
          {/* <div className="Checkout__left-item">
            <div className="Checkout__left-name">Last Name</div>
            <input type="text" className="Checkout__left-input" />
          </div> */}
          {/* <div className="Checkout__left-item">
            <div className="Checkout__left-name">Email</div>
            <input type="email" value={} onChange={} className="Checkout__left-input" />
          </div> */}
          <div className="Checkout__left-item">
            <div className="Checkout__left-name">Phone</div>
            <input
              type="text"
              value={phone}
              onChange={handleSetPhone}
              className="Checkout__left-input"
            />
          </div>
          <div className="Checkout__left-item">
            <div className="Checkout__left-name">Your Address</div>
            <input
              type="text"
              value={address}
              onChange={handleSetAddress}
              className="Checkout__left-input"
            />
          </div>
          <div className="Checkout__left-item">
            <div className="Checkout__left-name">Oder Notes</div>
            <textarea
              name="review"
              id="r-textarea"
              cols="30"
              rows="10"
              class="Checkout__text-rating"
              placeholder="Note something"
              value={note}
              onChange={handleSetNote}
            ></textarea>
          </div>
        </div>

        <div className="Checkout__right">
          <div className="Checkout__right-main">
            <div className="Checkout__right-text">YOUR ORDER</div>
            <div className="Checkout__your-order">
              <div className="Checkout__right-info">
                <p className="Checkout__right-info-item-head">PRODUCT</p>
                {cart.products.map((item) => (
                  <p className="Checkout__right-info-item">
                    {item.name} x {item.quantity}
                  </p>
                ))}

                <p className="Checkout__right-info-text">CART SUBTOTAL</p>
                <p className="Checkout__right-info-text">DISCOUNT</p>
                <p className="Checkout__right-info-text">SHIPPING</p>
                <p className="Checkout__right-order-total">Order Total</p>
              </div>
              <div className="Checkout__right-money">
                <p className="Checkout__right-info-item-head">TOTAL</p>
                {cart.products.map((item) => (
                  <p className="Checkout__right-info-item">
                    ${Number(item.price) * Number(item.quantity)}.00
                  </p>
                ))}

                <p className="Checkout__right-info-text">${cart.total}.00</p>
                <p className="Checkout__right-info-text">0%</p>
                <p className="Checkout__right-info-text">5.00$</p>
                <p className="Checkout__right-order-total">
                  ${cart.total + 5}.00
                </p>
              </div>
            </div>
          </div>
          <button
            key={"add1"}
            className="Checkout__place-order"
            onClick={() => handleOrder()}
          >
            Place Order
          </button>
          <StripeCheckout
            name="KhoaPhan Shop"
            image="https://cdn.tgdd.vn/2020/04/GameApp/icon-200x200.jpg"
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <button key={"add"} className="Checkout__place-order">
              Place Order Online
            </button>
          </StripeCheckout>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
