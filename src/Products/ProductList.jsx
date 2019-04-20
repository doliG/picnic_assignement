import React, { Component } from 'react';
import ProductCard from './ProductCard';
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
          {products.map(product =>
            <div className="col" key={product.id} >
              <ProductCard product={product} />
            </div>)}
        </div>
      </div>
    );
  }
}
export default ProductsList;