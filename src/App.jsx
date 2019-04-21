import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";

import ProductsList from './Products/ProductList';
import ProductDetails from './Products/ProductDetails';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/list" activeClassName="active">Products</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </nav>
        <Route exact path="/" component={() => <h1 className="page-title">Home</h1>} />
        <Route exact path="/list" component={ProductsList} />
        <Route exact path="/list/:id" component={ProductDetails} />
        <Route exact path="/about" component={() => <h1 className="page-title">About</h1>} />
      </div>
    );
  }
}
export default App;
