import React from 'react';

const ProductsList = (props) => {
    
    return(
        <div>
            <div>
                <h3>List of all Products</h3>
            </div>
            <div className="product-list">
                {props.products && props.products.map(product => 
                    
                <li key={product.id}>
                    Product Name: {product.name} -- 
                    Type: {product.variety} -- 
                    Price: ${product.price} -- 
                    Name of Farmer: {product.farmer.name}
                </li> 
                )}
            </div>
        </div>
    )
}
export default ProductsList;