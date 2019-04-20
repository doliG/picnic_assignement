import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import ProductsList from './Products/ProductList';
import './App.css';
import Loader from './Utils/Loader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/list"> Products</Link> |
          <Link to="/about"> About</Link>
        </nav>
        <Route exact path="/" component={() => <h1>Home</h1>} />
        <Route exact path="/list" component={ProductsList} />
        <Route exact path="/list/:id" component={() => <h1>Simple product</h1>} />
        <Route path="/about" component={() => <h1>About (todo)</h1>} />
      </div>
    );
  }
}

export default App;
