import React from "react";
import "./blogDescription.css";
import { ChatBubble, Person, QueryBuilder } from "@material-ui/icons";

const BlogDescription = ({blog}) => {
  console.log(blog)

  return (
    <div className="BlogDesc">
      <div className="BlogDesc__Header">
        <img
          src={blog.img}
          alt=""
          className="BlogDesc__img"
        />
        <div className="BlogDesc__Title">
          <p className="BlogDesc__Name">
            {blog.name}
          </p>
          <div className="BlogDesc__info">
            <p className="BlogDesc__author">
              <Person  style={{fill: "#fff", marginRight: "5px"}}/> {blog.author}
            </p>
            <p className="BlogDesc__time">
              <QueryBuilder style={{fill: "#fff", marginRight: "5px"}} /> {blog.createdAt}
            </p>
            <p className="BlogDesc__totalcmt">
              <ChatBubble  style={{fill: "#fff", marginRight: "5px"}}/> 2 Comments
            </p>
          </div>
        </div>
        
      </div>
      <p className="BlogDesc__content">
        {blog.desc}
      </p>
    </div>
  );
};

export default BlogDescription;
