import React from "react";
import './success.css';
import { Link } from 'react-router-dom';


const Success = () => {
  return (
    <div className="success_main">
      <div class="success_main_card">
        <div className="success_main_card_check">
          <i class="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>
        <Link to='/'>
            <button>Go to Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
