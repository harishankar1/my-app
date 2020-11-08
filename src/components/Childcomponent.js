import React, { useEffect } from 'react';
import { Card } from 'antd';
import { connect } from "react-redux";
import { fetachFilterProduct } from "../actions/productActions";
const Childcomponent = (props) => {

    const drawLi = (dd) => dd.map(p =><li key={p.key}>{p.title}<span className="close">x</span></li>)
    useEffect(() => {
        props.fetachFilterProduct();
    },[]);
    // const [checkedKeys, setCheckedKeys] = useState([]);
    const { products }  = props;
    let loading = true;
    if(products.items && products.filteredItems.length >0) loading = false;
    return (
        <Card style={{ width: 600, borderRadius: 10, height: 500 }} >

            {
                loading ? (<div className="novalue">No Value Selected</div>) :
            
                products.filteredItems.map(data=>{
                    const {children} = data;
                    return (
                        <div className ="chdata">
                            <span className="span1" key={data.key}>{data.title}</span>
                            <ul key={data.key}>{drawLi(children)}</ul> 
                        </div>                   
                    )
                })}
        </Card>
    );

}
export default connect(
    (state) => ({ products: state.products }),
    {
        fetachFilterProduct,
    }
  )(Childcomponent);