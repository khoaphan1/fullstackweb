import { Clear, KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import React from "react";
import "./table.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { editProduct,deleteProduct, resetProduct } from "../../redux/cartSlice";


const KEY = "pk_test_51L3lBoKviup5I1Ak2gJd1uwFT2UPzSGARfzz1uvO6FLvUiaRsg1qAZnqMuQtzEQ9cA2ei0THkNHcrWdaIoHfXGGz00DCcfb7B2"
console.log(KEY)

const Table = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDelete = (myid) => {
    dispatch(
      deleteProduct(myid)
    )
  }



  const handleQuantity = (type, quantity, index) => {
    
    if (type === "dec") {
      if(quantity < 2){
        console.log("khong duoc duoi 1")
        return
      }
      else{
        quantity = quantity - 1;
      }
    } else {
      quantity = quantity + 1;
    }
    console.log(type, quantity, index)
    dispatch(
      editProduct({
        type: type,
        stt: index,
        repQuantity : quantity
      })
    )
  };
  
  return (
    <div className="table-and-final">
      <div class="table-responsive">
        <table class="shop_table table--responsive">
          <thead>
            <tr class="cart-title">
              <th colspan="2" class="product-thumbnail">
                {" "}
                Product name
              </th>
              <th class="product-price">Price</th>
              <th class="product-quantity">Quantity</th>
              <th class="product-subtotal">Total</th>
              <th class="product-remove">&nbsp;</th>
            </tr>
          </thead>

          <tbody>
            {cart.products.map((product,index) => (
              <tr class="cart_item">
                <td data-label="Product Name" class="product-thumbnail">
                  <a href="/products/dictum-mauris?variant=39931718631529">
                    <img
                      src={product.img[0]}
                      className="product-img-in-user-cart"
                    />
                  </a>
                </td>
                <td class="product-name-thumb" data-title="Product">
                  <a href="/products/dictum-mauris?variant=39931718631529">
                    {product.name} ({product.size} / {product.color})
                  </a>
                </td>
                <td
                  data-label="Product Price"
                  class="product-price"
                  data-title="Price"
                >
                  <span class="amount">${product.price}.00</span>
                </td>
                <td
                  data-label="Quantity"
                  class="product-quantity"
                  data-title="Quantity"
                >
                  <div class="js-qty">
                    <button
                      type="button"
                      class="qty_minus js-qty__adjust js-qty__adjust--minus icon-fallback-text"
                      data-id=""
                      data-qty="0"
                    >
                      <KeyboardArrowDown onClick={() => handleQuantity("dec", product.quantity, index)}/>
                    </button>
                    <input
                      type="text"
                      class="js-qty__num"
                      value={product.quantity}
                      min="1"
                      data-id=""
                      aria-label="quantity"
                      pattern="[0-9]*"
                      name="updates[]"
                      id="updates_39931718631529"
                    />
                    <button
                      type="button"
                      class="qty_plus js-qty__adjust js-qty__adjust--plus icon-fallback-text"
                      data-id=""
                      data-qty="11"
                    >
                      <KeyboardArrowUp onClick={() => handleQuantity("inc", product.quantity, index)}/>
                    </button>
                  </div>
                </td>
                <td
                  data-label="Sub Total"
                  class="product-subtotal"
                  data-title="Total"
                >
                  <span class="amount">${product.quantity * product.price}.00</span>
                </td>
                <td class="product-remove">
                  <p class="remove set-12-svg" onClick={() => handleDelete(index)}>
                    <Clear />
                  </p>
                </td>
              </tr>
            ))}

            {/* <tr class="cart_item">
              <td data-label="Product Name" class="product-thumbnail">
                <a href="/products/criss-cross-intersecting-wall?variant=39932809478249">
                  <img
                    src="//cdn.shopify.com/s/files/1/0555/0912/3177/products/product50_small.jpg?v=1647915283"
                    alt="Criss Cross Intersecting Wall - Black / S"
                  />
                </a>
              </td>
              <td class="product-name-thumb" data-title="Product">
                <a href="/products/criss-cross-intersecting-wall?variant=39932809478249">
                  Criss Cross Intersecting Wall
                </a>
              </td>
              <td
                data-label="Product Price"
                class="product-price"
                data-title="Price"
              >
                <span class="amount">$46.00</span>
              </td>
              <td
                data-label="Quantity"
                class="product-quantity"
                data-title="Quantity"
              >
                <div class="js-qty">
                  <button
                    type="button"
                    class="qty_minus js-qty__adjust js-qty__adjust--minus icon-fallback-text"
                    data-id=""
                    data-qty="0"
                  >
                    <span class="fa fa-caret-down"></span>
                  </button>
                  <input
                    type="text"
                    class="js-qty__num"
                    value="1"
                    min="1"
                    data-id=""
                    aria-label="quantity"
                    pattern="[0-9]*"
                    name="updates[]"
                    id="updates_39932809478249"
                  />
                  <button
                    type="button"
                    class="qty_plus js-qty__adjust js-qty__adjust--plus icon-fallback-text"
                    data-id=""
                    data-qty="11"
                  >
                    <KeyboardArrowDown />
                  </button>
                </div>
              </td>
              <td
                data-label="Sub Total"
                class="product-subtotal"
                data-title="Total"
              >
                <span class="amount">$46.00</span>
              </td>
              <td class="product-remove">
                <a class="remove set-12-svg">
                  <Clear />
                </a>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>

      <div className="final">
        <div className="final-main">
          <div className="final-name">Cart totals</div>
          <div className="final-item">
            <div className="final-right">Subtotal</div>
            <div className="final-left">${cart.total}.00</div>
          </div>
          <div className="final-item">
            <div className="final-right">Discount</div>
            <div className="final-left">15%</div>
          </div>
          <div className="final-item">
            <div className="final-right">Shipping</div>
            <div className="final-left">$10.00</div>
          </div>
          <div className="line"></div>
          <div className="final-item">
            <div className="final-right">Total</div>
            <div className="final-left">$120.00</div>
          </div>
          
              <button className="final-btn">
                <Link to='/checkout'>
                 Go to check out page
                </Link>
              </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
