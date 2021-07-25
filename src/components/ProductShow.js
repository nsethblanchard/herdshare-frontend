import React from 'react';
import { Redirect } from 'react-router-dom';


const ProductShow = (props) => {
    
    let product = props.products[props.match.params.id - 1]
    // this may not work if we delete things and cause the front end ID to not match the backend ID

    return (
        <li>

            {/* {product ? null : <Redirect to="/products"/>} */}
            {product ? product.name : null} - 
            {product ? product.variey : null} - 
            {product ? product.price : null} - 
            
        </li>
    )
}

export default ProductShow;
