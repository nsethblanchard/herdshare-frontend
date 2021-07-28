import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProductInput from './ProductInput';
// import ProductsContainer from '../containers/ProductsContainer'


const FarmerShow = (props) => {
    
    let theFarmer = props.farmers.filter(farmer => farmer.id === parseInt(props.match.params.id))[0]

    return (
        <div>
            <h1>Farmer Show Page</h1>
            <h5>Farmer's Name: {theFarmer ? theFarmer.name : null}</h5>
            <h5>Farmer's Phone Number: {theFarmer ? theFarmer.phone : null}</h5>
            <h5>Farmer's Location: {theFarmer ? theFarmer.city : null}</h5>
           

            <h3>List of Farmer's Current Products</h3>
            {theFarmer && theFarmer.products.map(product => <li key={product.id}>{product.name}</li>)}
            <br/>
            

            {/* <ProductsContainer farmer={theFarmer && theFarmer} /> */}

            {/* Style this link as a button */}

            {theFarmer && <Link to={`/farmers/${theFarmer.id}/products/new`}>Add a new Product</Link>}

            <Route path='farmers/:farmer_id/products/new' component={ProductInput}/>            
        </div>
    )
}

export default FarmerShow;