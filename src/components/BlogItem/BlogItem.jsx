import React from "react";
import { Link } from "react-router-dom";
import './blogItem.css'
const BlogItem = ({item}) => {
  return (
    <div className="BlogItem">
      <div className="BlogItem__left">
        <img
          src={item.img}
          alt=""
          className="BlogItem__img"
        />
      </div>
      <div className="BlogItem__right">
        <p className="BlogItem__title">News</p>
        <h1 className="BlogItem__name">
          {item.name}
        </h1>
        <p className="BlogItem__desc">
          {item.desc}
        </p>
        <p className="BlogItem__date">02/06/2020</p>
          <Link to={`/blog/${item._id}`} className="BlogItem__readmore">
              Read more
          </Link>
      </div>
    </div>
  );
};

export default BlogItem;
