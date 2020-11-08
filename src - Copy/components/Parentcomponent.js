import React, { Component } from 'react';
import { Card, Tree } from 'antd';
import { connect } from "react-redux";
import { fetchProducts, filterProducts } from "../actions/productActions";
// import { addToCart } from "../actions/cartActions";
class Parentcomponent extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedData: []
        }
    }
    
    componentDidMount(){
        this.props.fetchProducts();
    }

    onCheck =(checkedKeys) =>{
        console.log('onCheck', checkedKeys);
        this.props.filterProducts(checkedKeys)
    }

    render() {
        console.log('this.state', this.props);
        const { treeData } = this.props;
        return (
            <Card style={{ width: 600, borderRadius: 10 }}>
                <Tree
                    checkable
                    className="parentTree"
                    defaultExpandAll
                    onCheck={this.onCheck}
                    // onSelect={onSelect}
                    treeData={treeData}
                />
            </Card>
        );
    }
}

// export default Parentcomponent;
export default connect(
    (state) => ({ products: state.products.filteredItems }),
    {
      fetchProducts,
      filterProducts,
    }
  )(Parentcomponent);