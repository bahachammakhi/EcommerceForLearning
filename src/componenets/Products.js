import React, { Component } from "react";
import {connect} from "react-redux";
import {fetchProducts} from "../actions/productActions";
import {addToCart} from "../actions/cartActions"
class Products extends Component {
  componentWillMount(){
    this.props.fetchProducts()
  }
  render() {
    const productItems = this.props.products.map(product => (
      <div className="col-md-4">
        <div className="thumbnail text-center" />
        <a href={'#'+product.id} onClick={(e)=> this.props.addToCart(this.props.cartItems, product)} >
            <img src={'/products/'+product.sku+"_2.jpg"} alt={product.title} />
            <p>
                {product.title}
            </p>
        </a>
        <div >
            <b>${product.price} </b>
            <button className="btn btn-primary" onClick={(e)=> this.props.addToCart(this.props.cartItems, product)} >Add to card</button>
        </div>
      </div>
    ));
    return <div>{productItems}</div>;
  }
}
const mapStateToProps = state =>({
  products : state.products.filteredItems,
  cartItems : state.cart.items
});
export default connect(mapStateToProps, {fetchProducts, addToCart})(Products);