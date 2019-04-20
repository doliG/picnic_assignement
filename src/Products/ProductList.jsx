import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductCard from './ProductCard';
import Loader from '../Utils/Loader';

import './ProductList.css';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentWillMount() {
    const url = "https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list";

    fetch(url)
      .then(res => {
        res.json().then(data => {
          this.setState({ products: data.products });
          console.log(this.state.products);
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <h1>Fresh fruits and vegetables, and very expensive meat</h1>
        <div className="grid">
          {products.length === 0 && <Loader />}
          {products.map(product =>
            <div className="col" key={product.product_id} >
              <Link to={`/list/${product.product_id}`}>
                <ProductCard product={product} />
              </Link>
            </div>)}
        </div>
      </div>
    );
  }
}
export default ProductsList;