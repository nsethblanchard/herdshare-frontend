import React from 'react';
// import ProductShow from './ProductShow';
// import { Link } from 'react-router-dom';

const ProductsList = (props) => {
    console.log(props)
    return(
        <div>
            {/* {props.products.map(product => 
            <li key={product.id}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li> 
            )} */}
        </div>
    )
}
export default ProductsList;