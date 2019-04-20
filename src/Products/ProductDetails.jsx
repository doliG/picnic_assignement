import React, { Component } from 'react';
import './ProductDetails.css';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: undefined,
      image: undefined,
      name: undefined,
      price: undefined,
      product_id: undefined
    };
  }

  componentWillMount() {
    const url = "https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/{product_id}/detail";
    const product_id = parseInt(this.props.match.params.id);

    fetch(url.replace("{product_id}", product_id))
      .then(res => {
        res.json().then(data => {
          this.setState({ ...data });
          console.log(data);
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { name, description, image, price } = this.state;
    return (
      <div className="container product">
        <img className="product-image" src={image} alt={name} />
        <div className="product-content">
          <h1>{name}</h1>
          <p className="product-content-price">{price}$</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
export default ProductDetails;