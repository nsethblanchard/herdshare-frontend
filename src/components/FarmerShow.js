import React from 'react';
// import { Redirect } from 'react-router-dom';
import ProductsContainer from '../containers/ProductsContainer'


const FarmerShow = (props) => {
    
    let theFarmer = props.farmers.filter(farmer => farmer.id === parseInt(props.match.params.id))[0]

    return (
        <div>
            <h1>Farmer Show Page</h1>
            <h5>Farmer's Name: {theFarmer ? theFarmer.name : null}</h5>
            <h5>Farmer's Phone Number: {theFarmer ? theFarmer.phone : null}</h5>
            <h5>Farmer's Location: {theFarmer ? theFarmer.city : null}</h5>
           

            <h3>List of Farmer's Current Products</h3>
            <ProductsContainer farmer={theFarmer && theFarmer} />
        </div>
    )
}

export default FarmerShow;