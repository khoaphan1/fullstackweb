import React from "react";
import { KeyboardArrowDown, KeyboardArrowUp, StarBorder } from "@material-ui/icons";
import "./productDetailMain.css";
import { useEffect, useState, useLayoutEffect } from "react";
import { publicRequest } from "../../requestMethod";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const ProductDetailMain = ({product}) => {
  console.log(product)
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [cartProduct, setCartProduct] = useState({});
  const [img, setImg] = useState("")
  const [size, setSize] = useState("")
  const [color, setColor] = useState("")
  const [quantity, setQuantity] = useState(1);

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await publicRequest.get("/product/find/" + id);
  //       setCartProduct(res.data);
  //     } catch {}
  //   };
  //   getProduct(); 
  // }, [id]);



  
  

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setCartProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const dispatch = useDispatch();


  const handleImg = (src) => {
    setImg(src)
    console.log(src)
    // alert("img là: " + src)
  }

  const handleSize = (size) => {
    setSize(size)
    console.log(size)
    // alert("img là: " + size)
  }

  const handleColor = (color) => {
    setColor(color)
    console.log(color)
    // alert("img là: " + color)
  }

  console.log( "day la cart ",cartProduct)

  const handleClick = () => {
    dispatch(
      addProduct({ ...cartProduct, quantity, color, size })
    );
  };

  const [filterCate, setFilterCate] = useState("All")

  return (
    <div className="ProDetail">
      <div className="ProDetail__main">
        <div className="ProDetail__left">
          <img
            src={img || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///+1tbWwsLD8/Pzu7u7h4eG4uLivr68bGxsAAADQ0NDLy8vl5eUfHx+8vLwYGBhfX1/U1NT09PTc3NwTExOmpqZaWlolJSWFhYXCwsLY2NhQUFBLS0srKyvq6uqTk5M6OjpxcXELCwsvLy+cnJyCgoJ6enpBQUGUlJRpaWlMTExeXl48PDyfn591dXVsbGwIId9IAAAOC0lEQVR4nO1d6WKqOhCO7AiBElAERKxYqed0ef+3u1lQFqNCW4Gem+9PK0vIl8lMJpMJACAgICAgICAgICAgICAgICAgICAgICAgICAg8Etgzx3tHhzLHruaX4aiSbMukLTN2FX9GjZ6J34E+q8Uo9yZHxGjPHZ1b0Fu4nTY79ZFS4b+mAxuw9YkXaqgSxFiJ7w+MpxZ47K4AY6ylT3uX2HocHrcnJ75RxhyzUlET/3LDB166n/AsI8t/ZUM571Gi8kybA+GtSGRe+Y6RubxvwVCyiOBRhasbUmPhq55aDx+HWdG34QkWSMJ0uo+M/o2yVFmVtEgAiyhq8MTtIYkiCkqQxNUv0CQGI7ZTNPO//bC0LrYt36S7sx9G7FRXZaRosbRVZZNa1oe84Yl2E+E0syyeSJQ/IhDUvLsBkp9GDjIEfXgp0dcegzIm7U5Xgx/Nr1CGtTYyN1FKFm1GqONrfq+qtpKjbPaGFZ5RCx6ZlDHXOnKsOIn255TVzAt8s/U7ZocJY4Hw4ToDESu9sj7/JzSxstqpF/cglVwfgoDVxNJHsNS6wejB7oamlN4EFlXhwZp5rH+iqIbNrPU+iFNTReGksakoUQ3vTtJmrOax+Vll4p4mkdPjGE5Y5fvO3dSKWvl9NuZ12GdlXRaDMvO1i3oLTlU3Ei7fdmkGDKxdBBg83pO5HWiDNk6knL7oiZFFmC96UlMiCGTiN1r/ig5lMAtKU6HoRSTazgqSNxoJ4ocjTu1oBTlG7o4GYbMivptCWL3Wz3HldDGu3S6NXIWXS96Mgw1ckXb65Gii0AEittOt8O7c3oMdWL5laYEdYsfL2s63aW5uRo9mAhDamWagf7zgikHcZMiHUWvFT0RhrSnNYz+7dVr2amXRcMxmyulT4Mh7aNNwdwL6DaXbwiNK6PiNBgSO4rqSqjdr1estwvgFz8JhnR2VxdBB4LNoZP20/l0GRIJNNSoW63qK6nEnvKFOAWGVAtrjpfUNY5bE7tE5v3WVBmS9q8Nhcx96wK5XQjvARNgSKfntebvETuq5eRQwfPc0ykwlBuBRl5Q6SpqDUNycXg5DhNgGDVP9Qpw1o0L4Nua8RlS56WyM3q/tdtKiNTWcMqfAEPU6KRRvzJrfgLpphxrOj5DMm2q5j69122dRkGcR4zPkOjd/OsVqjwbYrE4ijg6Qzr6VYLovZBScSKKyMm0Gp8h6ZbVr/4Zv817L2NS4zMkhuZsLjo7bBUq141vasZnKNe9Lb1/fapcTWKGL+cXk2BYm1d8p1Ti7sUXzxifIagPFl9Yz6xuJsPFZbx1dIazxome4z1BswNcPmMSDP3vMFSmzlACbVXqic3Ue2lTD7X+pdqTtzQNWyr1L7XZxafIEDU8r/55r9UYb4FpjvhkWvf1qUXNT6Me7mVYeHyGTW9y3rfQampJ4z2XkZrRGba8yd7G1G70cE5i2fgMCSf/64pYUzzAXZ4Zn2Fz4to7IbQZwuIE2ybAsBVB6ldmTfpEoTnrT+MznBGpVZOengmhlWVphV2nxJBIreZc9nJrakW2wq5TYtiKx/fRxHqonMiet0g6AYZ0vKh5zD3Mad2DAVeSkIdkeC0jhGab18517qe1JqN25tIpHZjhtVwC6m7Vatd102QjOEqI8Ar/wmzl67ieuASakU6pk+/WuIM0Ejdp8wtz6m/gWvYZ7WL1PtzF2qALSXGL7rzc+iO4uoVZameL3O+oDYI68Rq4WthzKeu7kK9lVtJu2ejEUnTbQjTsMr2dv5tj2E56Y5c2HSFao8mNqaLczGKjExJumsIXZtTfxNU8UKpIzXpfT2xrmRRKg5t5O7AWEiBONVhdqPls+SSSxVnGkP1W+iV13bnb+0fZq4+u7QJm8Yv20pHkxA2SyL7YZ6Jzb6RnegcMfgbXEkFpX7tMZ5YkKZr7qr2xVc/SLtOg2Xocp1DpliI/FsjiJmxLjKLDa4DGrsmmnCgNT29fr8/8UffkK743vwQb5nvthaY6CBSrVVKsjrcbvwPizvsRTpukfh2Uiw2ifOjTfa3JXXR5Q82vfRsdA7q9OY/YkuEH8x+GwtuwfeY3i/+F19KQDdvcoUO/3Gfya6G0XjBAfljqvyC+GuSN79FdXTMnsmL7lw4PAgICAgICAgICAgICAgICAgIC34eVUbwu7i1XyqtFxyL97P27tfpJLGAaEBgwuR0JROby+knlRa9+WEHyQ5X7ESzCw0ZVbX9WpMebFyL36fpJ1TxUP6zwRlsMj0W4Yv8oKbwZjL/J0HZfqh9TZQg+YQTsDVYjmlniR9F5R6zqaDGQCcNN+eJZmzWGYkVkiUm2LfihnNuHMkQqAoqjkaxSm9xOIc+jqHxlJEBWND8X5LNU5Acz/ICRHBzBMTAB8NY7jD+UIzoGu52ZqBAzXJo09QKZW1LfDxdftHWAbRrb3IQNhprp7U0zwLJ9MXeB+1emz8LXBynNg9LDYGdu1fyNNNSSHE8e9OrrimEBfTk/HILPDHhB+BrHWWjgtpcL+Gmp0XqbY4ZPLmOYrvGJtfFh+VIeOPJin37qZ1tDGTrh39Cxo7f0b66p8yTcY9JB4qj+PoXYpL27xcy3lnmRkNLgu+9ncPuYJZ0TQ3RICyBv33KVkqXtrIUFrgv8pBes2wz3kN7pu1gMdvBaFckYpiHdT8T+xPAvAH8CevOz4QHFSKnlTnLM8ODSp83cWhk/yTB9WxfFOnfD0McMQ7od2SjN6hILsQjVst4thmnIhpf3FQJqkLUZQnrEN57JH9klh1ia3gEzXEA2ZEZhAhBhT1DkD2OI8ee4x3XHDElPeYdljyP/uFv2P7WlNYYbozbqcRi6tAzfzc4MMRRv9pGGHtZ5lsWAcCFz+CTpGNLytjH/MsOzHpKK5H/InwyW25s0Y6HAdXkyaDIspcPQiaH8+maa4fEIPfAEmaGW3QREab6jMMyHfMGsxZDKZQ/LnTELuJCJmrHKtBjC2vjYiWFivMS4Y7+6Hh6ZmAw3MAGecWBfREGP+XQJj2EEy/H7GVdkGzIrHhNGR5fqnh2uca8t1eYFm3n10tJcMJy7TLszzHAPmZPrUD0stT5+zDc9eAxRGlKNUGGIm5yZDPBJbOkB0oF5leOuuwypa6AQg9uFYWl75Lcwxoe39NKCPPBoUIdANh9kaTgMge6+4V4Ubd0ZHa0yBaAXuMUMJZioQMm2b5ih5+ZYXf2EXGQHy/icQHOFoR/kloysdUiG/BfjyUfesljjB6q7XENynASP2ZnwbtY8ShkWJW+I/ZiAmVS7wN6HaTg7Yg6X+IQJ7XwLSBcjFzENTIydeepjlpkQn4b2Q9+kDSibuElWrosLeokMEw8VGSl0q25JoVZOC3rQnEt1ag6hHJ0yy5VZls1OblT0mkkIONQ4RNlKR4Bdp+ir1b60f150zm3fkCtthw6jyGE9kN4cv2cLfPkio96qtrCwbD/Z6dds8e8k4RAo5WdmLXc/ck0eBd+kCi+vgxE+pjMMXoLi3Vlsg8e4opOAloQw/Tv0hpJhIY/99TUBAYEx8OMf1JzWFzq9l7c0X2dd8uu9ZRcPUl0VeccCB8EhCJKP561rdFicsOrO+jW8B8Hy8Lw14EQ2XXzCJXWfnNS4/34WdXV/mmO5a+p56iEc/AuAPGjnqJIV/sw09BSmACs4iYWoAp5jQIlJPSlb2uvsWOQBJGXkpeqbBZviKBY+Y80B0l735Zqc7LzjeZFf7SotYKmA8zJgFS/2s5NOKtq+XMzz8MOc/f7hzptvVEspSCG1fA5InP1IbKH5NA/MHQzVmbnbGa5W6uFubYfmzjU+yE1RSgL/WWae53jL9DQtogZ1k5A5rsvCCXuD/FgTtViaypu5C4xHL+XosOXiJ/AYI/+DBhLdAkpIztK1qytIT3cysAxc0/RPvlKVeWHg9p/vck1RFkYRnhk6RvhcfeBDSeHKRlYCyRrcylhbyH6FRMpP+frTV/wk7Lr6+kVksPketlkZ/XomETEjpXYlTOk1S9yfGcOcRi8iIyMNQuMEeloxJCbGSJOMaeNLSJtQLgwP2O6WMn8PnwlD+iTfuL12+W2sYPPNQUvIokoqCaOVUbE1i+Gv3LhkyGyk6h6AapRh+bDGEMjaAY8VMMWNJIflutQMrs6BRLA1EHiCTB/dB68av8JmJwmN8p/cxQ+nYXDMkDooFUOXHiaR76iMN+L6tmIttnYMMSn1tDJhwwQcy+bDPcQDTwazPu6DFXEWVmvU2udMPo8YBRaUy6L6NxjqsLQqn5yFBycNFM8oXQQUbsGyJIX10RqMoQqrQfA5cFoyvMvQgWXItTgzdOA5yv8JIxuWBEaTIahsGUpdhPWQRRhVYkzvM1QN1pEVeNZDv+zbgITJo3OTXerhUAwtNyxdkCMJgWsGW3ShtvQ+Q2xLqav3kVeWpji1GdpChG0pi3wX+G47qNvSoRiCVwOuvM0mSsI1IfIXPnlK/AmJIDow9INwoc6PRk0PYwMePCRvnMJ9pysDL6piremKT2YUkaJm0FCGZAi03HWDwHU/2JTuQH2aZ+rTbOmRNxa0P5gx82lIPgNhaJKRLF7vTDOPV0Y1V/L/BEGwCwImS5qLsCuV850kLOwS0hpJ6QWZa/BwyNZ+lVUv71Qi3WHVVct8EKaatocA8vAhj/1GHgvp+th9xaKvT3njxWq1P4f6VU0/e63I0md+WSo77z1kbfTHIEtsxiW7A0hiHBQB9UyeXf3elb8VPgyO++wt+By7Io+D8ppsi+dBP0AtICAgICAgICAgICAgICAgICAgICAgICAgIPBT+A+6muaeu+KFWwAAAABJRU5ErkJggg=="} 
            // src="https://cdn.shopify.com/s/files/1/0555/0912/3177/products/product6.jpg?v=1647857360"
            alt=""
            className="ProDetail__img"
          />
          <div className="ProDetail__listPic">
            {/* <div className="ProDetail__itemPic active">
              <img
                src="https://cdn.shopify.com/s/files/1/0555/0912/3177/products/product6.jpg?v=1647857360"
                alt=""
              />
            </div> */}
            {product.img?.map((item) => 
              <div className="ProDetail__itemPic" >
                <img
                  src={item}
                  onClick={() => handleImg(item)}
                  alt=""
                />
              </div>
            )}
            
          </div>
        </div>
        <div className="ProDetail__right">
          <p className="ProDetail__name">{product.name}</p>
          <div className="ProDetail__price">
            <p className="ProDetail__oldprice">${product.oldprice}.00 USD</p>
            <p className="ProDetail__newprice">${product.price}.00 USD</p>
          </div>
          <div className="ProductRating__item-ratting">
            <div className="ProductRating__item-stars">
              <StarBorder className="ProductRating__star" />
              <StarBorder className="ProductRating__star" />
              <StarBorder className="ProductRating__star" />
              <StarBorder className="ProductRating__star" />
              <StarBorder className="ProductRating__star" />
            </div>
            <p className="ProductRating__item-text">No reviews</p>
          </div>
          <div className="line-product"></div>
          <div className="ProDetail__desc">
            {product.desc}
          </div>
          <div className="ProDetail__listColor">
            <p className="ProDetail__textPro">COLOR</p>
            { product.color?.map((item) => 
              <div
                className="ProDetail__itemColor"
                // style={{ background: `${item}` }}
                style={color === item  ? {border: '2px solid #47B5FF' , background: `${item}`} : {background: `${item}`}}
                onClick={() => handleColor(item)}
              ></div>
            )}
            {/* <div
              className="ProDetail__itemColor active"
              style={{ background: "#000" }}
            ></div>
            <div
              className="ProDetail__itemColor"
              style={{ background: "red" }}
            ></div>
            <div
              className="ProDetail__itemColor"
              style={{ background: "#a0522d" }}
            ></div> */}
            {/* <div className="ProDetail__itemColor-boder">
                <div className="ProDetail__itemColor" style={{background: "red"}}></div>
              </div>
              <div className="ProDetail__itemColor-boder">
                <div className="ProDetail__itemColor" style={{background: "red"}}></div>
              </div>
              <div className="ProDetail__itemColor-boder">
                <div className="ProDetail__itemColor" style={{background: "red"}}></div>
              </div> */}
          </div>
          <div className="ProDetail__listSize">
            <p className="ProDetail__textPro">SIZE</p>
            {product.size?.map((item) => 
              <div className="ProDetail__itemSize"
                onClick={() => handleSize(item)}
                style={size === item  ? {border: '1px solid red'} : {}}
              >
                {item}
              </div>
            )}
            {/* <div className="ProDetail__itemSize active">S</div>
            <div className="ProDetail__itemSize">M</div>
            <div className="ProDetail__itemSize">L</div> */}
          </div>
          <div className="add-and-quantity">
            <div className="ProDetail__quantity">
              <div class="ProDetail__quantity-main">
                <button
                  type="button"
                  class="button-up"
                  data-id=""
                  data-qty="0"
                >
                  <KeyboardArrowUp  onClick={() => handleQuantity("inc")}/>
                </button>
                <input
                  type="text"
                  class="ProDetail__quantity-input"
                  value=  {quantity}
                  min="1"
                  data-id=""
                  aria-label="quantity"
                  pattern="[0-9]*"
                  name="quantity"
                  id="Quantity"
                />
                <button
                  type="button"
                  class="button-down"
                  data-id=""
                  data-qty="11"
                >
                  <KeyboardArrowDown onClick={() => handleQuantity("dec")} />
                </button>
              </div>
            </div>
            <button onClick={handleClick} className="ProDetail__addToCart">ADD TO CART</button>
          </div>
          <button className="ProDetail__random">RANDOM PRODUCT</button>
          <div className="line-product"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailMain;
