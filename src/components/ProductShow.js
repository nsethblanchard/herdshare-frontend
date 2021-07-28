import React from 'react';
// import { Redirect } from 'react-router-dom';


const ProductShow = (props) => {
    
    // let product = props.products[props.match.params.id - 1]
    // this may not work if we delete things and cause the front end ID to not match the backend ID

    let product = props.products.filter(product => product.id === parseInt(props.match.params.id))[0]

    return (
        <div>
            <h1>Product Show Page</h1>
            <h5>Product's Name: {product ? product.name : null}</h5>
            <h5>Product's Variety: {product ? product.variety : null}</h5>
            <h5>Product's Price: {product ? product.price : null}</h5>           
        </div>
    )
}

export default ProductShow;
