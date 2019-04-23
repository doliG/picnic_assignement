import React, { Component } from "react";
import Loader from "../Utils/Loader";
import "./ProductDetails.css";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: undefined,
      image: undefined,
      name: undefined,
      price: undefined,
      product_id: undefined,
      status: "fetching" // 'fetching' || 'ok' || 'error'
    };
  }

  componentDidMount() {
    const url =
      "https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/{product_id}/detail";
    const product_id = parseInt(this.props.match.params.id);

    fetch(url.replace("{product_id}", product_id))
      .then(res => {
        if (res.status === 200)
          res.json().then(data => {
            this.setState({ ...data, status: "ok" });
            console.log(data);
          });
        else this.setState({ status: "error" });
      })
      .catch(err => console.error(err) && this.setState({ status: "error" }));
  }

  render() {
    const { name, description, image, price, status } = this.state;

    switch (status) {
      default:
        return <Loader />;
      case "ok":
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
      case "error":
        return <p>Error component goes here</p>;
      case "fetching":
        return <Loader />;
    }
  }
}
export default ProductDetails;
