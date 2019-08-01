import React, { Component } from "react";
import Products from "./componenets/Products";
import Filter from "./componenets/Filter";
import Basket from "./componenets/Basket";
import {Provider} from "react-redux"
import store from "./store"
export default class App extends Component {

  componentWillMount() {
    
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }
  }
  render() {
    return (
      <Provider store={store}>
      <div className="container">
        <h1>Ecommmerce Web site </h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <Filter
            />
            <hr />
            <Products
            />
          </div>
          <div className="col-md-4">
            <Basket />
          </div>
        </div>
      </div>
      </Provider>
    );
  }
}
