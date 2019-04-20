import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import ProductsList from './Products/ProductList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to="/" activeCLassName="active">Home</NavLink>
          <NavLink to="/list" activeCLassName="active">Products</NavLink>
          <NavLink to="/about" activeCLassName="active">About</NavLink>
        </nav>
        <Route exact path="/" component={() => <h1>Home</h1>} />
        <Route exact path="/list" component={ProductsList} />
        <Route exact path="/list/:id" component={() => <h1>Simple product</h1>} />
        <Route exact path="/about" component={() => <h1>About (todo)</h1>} />
      </div>
    );
  }
}

export default App;
