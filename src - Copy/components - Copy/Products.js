import React, { Component } from "react";
import formatCurrency from "../util";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

import data from '../data.json';

class Products extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   product: null,
    // };
    // this.state = {
    //   product: data.products,
    // };
  }
  componentDidMount() {
    // fetch('ff',{

    // })
    this.props.fetchProducts();
  }
  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    console.log('this.state', this.props);

    const { products } = this.props;
    console.log('this.state', this.props);
    return (
      <div>
        <ul className="products">
          {products && products.map((product) => (
            <li key={product._id}>
              <div className="product">
              <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                  </Link>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button
                    onClick={() => this.props.addToCart(product)}
                    className="button primary"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
   
  }
}
export default connect(
  (state) => ({ products: state.products.filteredItems }),
  {
    fetchProducts,
    addToCart,
  }
)(Products);
