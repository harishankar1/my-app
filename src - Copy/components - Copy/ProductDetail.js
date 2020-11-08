import React, { Component } from 'react';
import { connect } from "react-redux";
import formatCurrency from "../util";

import { fetchProducts, fetchSingleProducts } from "../actions/productActions";
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //   product: null,
        // };
        // this.state = {
        //   product: data.products,
        // };
    }
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchSingleProducts(id);
    }
    render() {
        const {singleProduct} =  this.props;

        console.log('singleProduct', singleProduct)

        if(singleProduct === undefined || singleProduct === {}){
            return <p>loading.............</p>
        }
        
        return (
            <div className="product-details">
                <img src={singleProduct.image} alt={singleProduct.title}></img>
                <div className="product-details-description">
                <p>
                    <strong>{singleProduct.title}</strong>
                </p>
                <p>{singleProduct.description}</p>
               
                <div className="product-price">
                <div>{formatCurrency(singleProduct.price)}</div>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        singleProduct: state.products.singleProduct,
    };
 };
 const mapDispatchToProps = dispatch => ({
    fetchSingleProducts: id => {
        dispatch(fetchSingleProducts(id));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);