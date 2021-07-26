import React from 'react';
// import { Redirect } from 'react-router-dom';


const ProductShow = (props) => {
    
    // let product = props.products[props.match.params.id - 1]
    // this may not work if we delete things and cause the front end ID to not match the backend ID

    let product = props.products.filter(product => product.id === parseInt(props.match.params.id))[0]

    return (
        <li>

            {/* {product ? null : <Redirect to="/products"/>} */}
            {product ? product.name : null} - 
            {product ? product.variety : null} - 
            {product ? product.price : null} - 
            
        </li>
    )
}

export default ProductShow;
