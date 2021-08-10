import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductInput from './ProductInput';

function FarmerShow() {
    const location = useLocation()
    const { farmer } = location.state

    // const history = useHistory()
    // console.log("history", history)
    
    
    return (
        <div>
            <div>
                <h1>Farmer Profile Page</h1>
                <h3>Farmer's Name: {farmer.name}</h3>
                <h5>Farmer's Phone Number: {farmer.phone}</h5>
                <h5>Farmer's Location: {farmer.city}</h5>
            </div>
            <hr></hr>
            <div>
                <h3>List of Current Products for this Farmer</h3>
                {farmer.products.map(product => 
                    <li key={product.id}>
                        {product.name}
                    </li>
                )}
            </div>
            <hr></hr>
            <br></br>
            <ProductInput farmer={farmer}/>
        </div>
    )
}



export default FarmerShow;