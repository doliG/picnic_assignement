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
      filteredProducts: [],
      status: 'fetching' // 'fetching' || 'ok' || 'error'
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    const url = "https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list";

    fetch(url)
      .then(res => {
        res.json().then(data => {
          const { products } = data;
          this.setState({
            products,
            filteredProducts: products,
            status: 'ok'
          });
          console.log(this.state.products);
        });
      })
      .catch(err => {
        // In order to handle error while fetching from api, we just need
        // to create some components to display errors.
        // We can too store err in our state to display advanced message/help.
        this.setState({ status: 'error' });
      });
  }

  onChange(evt) {
    const wanted = evt.target.value;
    if (!wanted)
      this.setState({ filteredProducts: products });
    const { products } = this.state;
    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(wanted.toLowerCase()));
    this.setState({ filteredProducts });
  }

  render() {
    const { filteredProducts, status } = this.state;
    const { onChange } = this;

    return (
      <div>
        <div className="content-width">
          <h1 className="page-title">Fresh fruits and vegetables</h1>
          <input className="search" type="text" placeholder="Search..." onChange={onChange} />
        </div>
        <div className="grid">
          {status === 'fetching' && <Loader />}
          {status === 'ok'
            && filteredProducts.length === 0
            && <p>No result.</p>}
          {status === 'ok' && filteredProducts.map(product =>
            <div className="col" key={product.product_id} >
              <Link to={`/list/${product.product_id}`}>
                <ProductCard product={product} />
              </Link>
            </div>)}
            {status === 'error' && <p>Custom error component goes here.</p>}
        </div>
      </div>
    );
  }
}
export default ProductsList;