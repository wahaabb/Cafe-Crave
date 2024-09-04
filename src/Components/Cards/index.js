import React from 'react';
import { Link } from 'react-router-dom';
export default function Cards({ img, heading, title, btn, link, addToCart, price }) {
  // Function to handle add to cart
  const handleAddToCart = () => {
    if (addToCart) {
      addToCart({ heading, img, price });
    }
  };
  return (
    <div className="card mx-auto">
      <img src={img} className="card-img-top" alt={heading} />
      <div className="card-body">
        <h5 className="card-title">{heading}</h5>
        <p className="card-text">{title}</p>
        <p className="card-text"><strong>{price}</strong></p>
        {addToCart ? (
          <button className="btn " onClick={handleAddToCart}>
            {btn}
          </button>
        ) : (
          <Link to={link} className="btn">
            {btn}
          </Link>
        )}
      </div>
    </div>
  );
}