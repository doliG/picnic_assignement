import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { image, name, price } = product;
  return (
    <div className="card">
      <img className="card-img" src={image} alt={name}/>
      <p className="card-title">{name}</p>
      <p className="card-text">{price}$</p>
    </div>
  );
};
export default ProductCard;