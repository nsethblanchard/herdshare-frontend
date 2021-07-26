import React from 'react';
import ProductShow from './ProductShow';
import { Link } from 'react-router-dom';

const ProductsList = (props) => {
    return(
        <div>
            {props.products && props.products.map(product => 
            <li key={product.id}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li> 
            )}
        </div>
    )
}
export default ProductsList;