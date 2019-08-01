import React, { Component } from "react";
import { connect } from "react-redux";
import {removeFromCart} from "../actions/cartActions"
 class Basket extends Component {

  render() {
    const { cartItems } = this.props;
    return (
      <div className="alert alert-info">
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>You have {cartItems.length} products in basket</div>
        )}
        {cartItems.length > 0 && <div>
          <ul>
            {cartItems.map(item =>
              <li>
                <b>{item.title}</b>
                X {item.count} = {item.price * item.count}
                <button className="btn btn-dark"  onClick={(e)=>{this.props.removeFromCart(this.props.cartItems, item)}} >  X</button>
              </li>
            )}
          </ul>
          Total :${cartItems.reduce((a ,c)=> a+ c.price*c.count, 0)}
         <button className="btn btn-primary" onClick={()=>alert("Checkout needs to implement ...")}>Check out</button>  </div>}
           
      </div>
    );
  }
}
const mapStateToProps = state =>({
  cartItems : state.cart.items
})
export default connect(mapStateToProps,{removeFromCart})(Basket)