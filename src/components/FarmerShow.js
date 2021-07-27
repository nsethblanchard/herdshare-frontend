import React from 'react';
// import { Redirect } from 'react-router-dom';
import ProductsContainer from '../containers/ProductsContainer'


const FarmerShow = (props) => {
    
    let theFarmer = props.farmers.filter(farmer => farmer.id === parseInt(props.match.params.id))[0]

    return (
        <div>
            <li>
                {/* {farmer ? null : <Redirect to="/farmers"/>} */}
                {theFarmer ? theFarmer.name : null} - 
                {theFarmer ? theFarmer.email : null} - 
                {theFarmer ? theFarmer.phone : null} - 
                {theFarmer ? theFarmer.city : null}
            </li>

            <h3>List of Farmer's Current Products</h3>
            <ProductsContainer farmer={theFarmer && theFarmer} />
        </div>
    )
}

export default FarmerShow;