import React from 'react';
import './ProductPopup.css';

const ProductPopup = ({ product }) => {
  const { image, name, description, price } = product;

  return (
    <div className="popup">
      <div className="popup-content">
        <img className="popup-image" src={image} alt={name} />
        <h1>{name}</h1>
        <p className="popup-content-price">{price}$</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default ProductPopup;