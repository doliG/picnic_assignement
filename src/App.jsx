import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import ProductsList from './Products/ProductList';
import './App.css';

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
        <Route path="/list" component={ProductsList} />
        <Route path="/about" component={() => <h1>About (todo)</h1>} />
      </div>
    );
  }
}

export default App;
