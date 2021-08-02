import React from 'react';

const ProductsList = (props) => {
    console.log("Products list")
    return(
        <div>
            <h3>List of all Products</h3>
            {props.products && props.products.map(product => 
            <li key={product.id}>
                Product Name: {product.name}-
                Type: {product.variety}-
                Price: ${product.price}
            </li> 
            )}
        </div>
    )
}
export default ProductsList;