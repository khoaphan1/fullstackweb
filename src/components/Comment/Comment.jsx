import React from "react";
import "./comment.css";
import { useState, useEffect } from "react";
import { getComments, addComment } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


const Comment = ({ type }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments);

  useEffect(() => {
    getComments(dispatch);
  }, [dispatch]);

  console.log(comments);
  console.log(type);

  const pageComment = [];

  for (let i = 0; i < comments.length; i++) {
    if (comments[i].itemId === id && comments[i].category === type) {
      pageComment.push(comments[i]);
    }
  }

  console.log(pageComment);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmitComment = () =>{
    const newCmt = {
      author,
      content,
      category : type,
      itemId : id,
      star: rating
    }


    
    console.log(newCmt)
    addComment(newCmt, dispatch)

    setRating(0)
    setHover(0)
    setAuthor("")
    setContent("")
    pageComment.push(newCmt)
    alert('Cảm ơn bạn đã đánh giá, chúc bạn mua hàng vui vẻ')

  }

  return (
    <div className="comment-main">
      <div className="comment-top">
        <div className="text-comment">THERE ARE {pageComment.length} COMMENTS</div>
        <div className="comment-list">
          {pageComment.map((item) => (
             <div className="comment-item">
             <div className="avatar-in-cmt">
               <img
                 src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/icon/logo.jpg"
                 alt=""
               />
             </div>
             <div className="info-in-cmt">
               <p className="name-in-cmt">{item.author}</p>
               <div className="list-star">
                 <div className="star-rating-user">
                   {[...Array(5)].map((star, index) => {
                     index += 1;
                     return (
                       <p
                         key={index}
                         className={
                           index <= item.star
                             ? "on rating-btn"
                             : "off rating-btn"
                         }
                       >
                         <p className="star">&#9733;</p>
                       </p>
                     );
                   })}
                 </div>
               </div>
               <span className="date-in-cmt">6/6/2022</span>
               <p className="title-in-cmt">{item.content}</p>
             </div>
           </div>
          ))}
          {/* <div className="comment-item">
            <div className="avatar-in-cmt">
              <img
                src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/icon/logo.jpg"
                alt=""
              />
            </div>
            <div className="info-in-cmt">
              <p className="name-in-cmt">Khoa Phan</p>
              <div className="list-star">
                <div className="star-rating-user">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <p
                        key={index}
                        className={
                          index <= 4 ? "on rating-btn" : "off rating-btn"
                        }
                      >
                        <p className="star">&#9733;</p>
                      </p>
                    );
                  })}
                </div>
              </div>
              <span className="date-in-cmt">6/6/2022</span>
              <p className="title-in-cmt">Very good</p>
            </div>
          </div>
          <div className="comment-item">
            <div className="avatar-in-cmt">
              <img
                src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/icon/logo.jpg"
                alt=""
              />
            </div>
            <div className="info-in-cmt">
              <p className="name-in-cmt">Khoa Phan</p>
              <div className="list-star">
                <div className="star-rating-user">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <p
                        key={index}
                        className={
                          index <= 4 ? "on rating-btn" : "off rating-btn"
                        }
                      >
                        <p className="star">&#9733;</p>
                      </p>
                    );
                  })}
                </div>
              </div>
              <span className="date-in-cmt">6/6/2022</span>
              <p className="title-in-cmt">Very good</p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="comment-of-user">
        <h4 className="rating-area-title">Add your rating here !</h4>
        <div className="star-rating">
          <p>Vote star</p>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
        <label for="r-textarea">Your Review</label>
        <textarea
          name="review"
          id="r-textarea"
          cols="30"
          rows="10"
          className="text-rating"
          value={content} onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label for="r-name">Name *</label>
        <input type="text" placeholder="" id="r-name" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        <Link to="/" onClick={handleSubmitComment} className="submit-btn">Submit</Link>
      </div>
    </div>
  );
};

export default Comment;
