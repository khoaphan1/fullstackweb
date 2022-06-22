import React from "react";
import "./productItem.css";
import { FavoriteBorder, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { addProduct } from "../../redux/cartSlice";
import { useEffect, useState, useLayoutEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { publicRequest } from "../../requestMethod";
// import { resetProduct } from "../../redux/cartSlice";




const ProductItem = ({item, dataItem}) => {

  const listcolor = item.color;
  // console.log(listcolor)

  const dispatch = useDispatch();

  // const [itemId, setItemId] = useState("")
  const [cartProduct, setCartProduct] = useState({});
  const [size, setSize] = useState(item.size[0]);
  const [color, setColor] = useState(item.color[0]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + dataItem);
        setCartProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [dataItem]);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/product");
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  const handleClick = () => {
    // dispatch(resetProduct());
    dispatch(
      addProduct({ ...cartProduct, quantity, color, size })
    );
  };

  return (
    <div className="container">
      <div className="productItem">
        <div className="productItem__picture">
          <img
            src={item.img[0]}
            alt=""
            className="productItem__img"
          />
          <div className="productItem__btn">
            <div className="productItem__btn-item">
                <div className="productItem__small">
                    <FavoriteBorder />
                    <div className="productItem__sub">
                      Add to favorite
                      <div className="productItem__tri"></div>
                    </div>
                </div>
            </div>
            <div className="productItem__btn-item">
                <div>
                    <Search />
                    <div className="productItem__sub">
                      View product
                      <div className="productItem__tri"></div>
                    </div>
                </div>
            </div>
          </div>
          <div className="productItem__listcolor">
            {listcolor.map((item) =>
              <div className="productItem__color" style={{backgroundColor: `${item}`}}></div>
            )}
            {/* <div className="productItem__color" style={{backgroundColor: "#000000"}}></div>
            <div className="productItem__color" style={{backgroundColor: "#778899"}}></div>
            <div className="productItem__color" style={{backgroundColor: "#f0e68c"}}></div>
            <div className="productItem__color" style={{backgroundColor: "#a0522d"}}></div> */}
          </div>
        </div>
        <div className="productItem__bottom">
          <Link to={`/product/${item._id}`} className="productItem__name">
            {item.name}
          </Link>
          {/* <a href="" className="productItem__name">
          </a> */}
          <div className="productItem__price-and-add">
            <div className="productItem__price">
              <p className="productItem__newprice">${item.price}.00</p>
              <p className="productItem__oldprice">${item.oldprice}.00</p>
            </div>
            <div className="productItem__add" onClick={handleClick}>
                <p className="productItem__add-text">
                    ADD TO CART
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
