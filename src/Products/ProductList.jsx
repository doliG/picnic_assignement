import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";
import Loader from "../Utils/Loader";
import Info from "../Utils/Info";

import "./ProductList.css";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      status: "fetching" // 'fetching' || 'ok' || 'error'
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const url =
      "https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list";

    fetch(url)
      .then(res => {
        res.json().then(data => {
          if (res.status === 200) {
            const { products } = data;
            const filteredProducts = products;
            this.setState({ products, filteredProducts, status: "ok" });
            console.log(this.state.products);
          } else this.setState({ status: "error" });
        });
      })
      .catch(err => {
        // In order to handle error while fetching from api, we just need
        // to create some components to display errors.
        // We can too store err in our state to display advanced message/help.
        this.setState({ status: "error" });
      });
  }

  onChange(evt) {
    const wanted = evt.target.value;
    const { products } = this.state;

    if (!wanted) {
      this.setState({ filteredProducts: products });
      return;
    }
    const filteredProducts = products.filter(p =>
      p.name.toLowerCase().includes(wanted.toLowerCase())
    );
    this.setState({ filteredProducts });
  }

  render() {
    const { filteredProducts, status } = this.state;
    const { onChange } = this;

    switch (status) {
      default:
      case "fetching":
        return <Loader />;
      case "error":
        return <p>Custom error component goes here.</p>;
      case "ok":
        return (
          <Fragment>
            <div className="content-width">
              <h1 className="page-title">Fresh fruits and vegetables</h1>
              <input
                className="search"
                type="text"
                placeholder="Search..."
                onChange={onChange}
              />
            </div>
            <div className="grid">
              {filteredProducts.length === 0 && <Info message={"No result."} />}
              {filteredProducts.map(product => (
                <div className="col" key={product.product_id}>
                  {/* Note that I didn't implement the popup cause I didn't finish in the given time (< 2h)
                  But I've started a compoenent called ProductPopup.jsx, check the source :) */}
                  <Link to={`/list/${product.product_id}`}>
                    <ProductCard product={product} />
                  </Link>
                </div>
              ))}
            </div>
          </Fragment>
        );
    }
  }
}
export default ProductsList;
