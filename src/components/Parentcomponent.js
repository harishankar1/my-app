import React, { useState, useEffect } from 'react';
import { Card, Tree } from 'antd';
import { connect } from "react-redux";
import { fetchProducts, filterProducts } from "../actions/productActions";
const Parentcomponent = (props) => {
    useEffect(() => {
        props.fetchProducts();
    },[]);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const { products }  = props;
    let loading = true;
    if(products.items && products.items.length >0) loading = false;
    const onCheck = checkedKeys => {
        setCheckedKeys(checkedKeys);
        props.filterProducts(checkedKeys)
    };
    return (
        <Card style={{ width: 600, borderRadius: 10, height: 500 }} loading={loading} >
            <Tree
            expanded={false}
                checkable
                className="parentTree"
                checkedKeys={checkedKeys}
                defaultExpandAll
                onCheck={onCheck}
                treeData={products.items}
            />
        </Card>
    );

}
export default connect(
    (state) => ({ products: state.products }),
    {
      fetchProducts,
      filterProducts,
    }
  )(Parentcomponent);