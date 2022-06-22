import { StarBorder } from "@material-ui/icons";
import React from "react";
import "./productRating.css";

const ProductRating = () => {
  return (
    <div className="ProductRating">
      <div className="ProductRating__main">
        <span className="ProductRating__title">FEATURED PRODUCTS</span>
        <ul className="ProductRating__list">
          <li className="ProductRating__item">
            <div className="ProductRating__item-left">
              <img
                src="https://cdn.shopify.com/s/files/1/0555/0912/3177/products/product47.jpg?v=1647915625"
                alt=""
                className="ProductRating__item-img"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0555/0912/3177/products/product46.jpg?v=1647915625"
                alt=""
                className="ProductRating__item-imghover"
              />
            </div>
            <div className="ProductRating__item-right">
              <p className="ProductRating__item-name">Sun-Shaped Mirror Wall</p>
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
              <div className="ProductRating__item-price">
                <p className="ProductRating__item-old">$120.00</p>
                <p className="ProductRating__item-new">$50.00</p>
              </div>
            </div>
          </li>
          <li className="ProductRating__item">
            <div className="ProductRating__item-left">
              <img
                src="https://cdn.shopify.com/s/files/1/0555/0912/3177/products/product47.jpg?v=1647915625"
                alt=""
                className="ProductRating__item-img"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0555/0912/3177/products/product46.jpg?v=1647915625"
                alt=""
                className="ProductRating__item-imghover"
              />
            </div>
            <div className="ProductRating__item-right">
              <p className="ProductRating__item-name">Sun-Shaped Mirror Wall</p>
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
              <div className="ProductRating__item-price">
                <p className="ProductRating__item-old">$120.00</p>
                <p className="ProductRating__item-new">$50.00</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductRating;
