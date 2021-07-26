import React from 'react';
// import { Redirect } from 'react-router-dom';
import ProductsContainer from '../containers/ProductsContainer'


const FarmersShow = (props) => {
    
    let farmer = props.farmers.filter(farmer => farmer.id === parseInt(props.match.params.id))[0]

    return (
        <div>
            <li>
                {/* {farmer ? null : <Redirect to="/farmers"/>} */}
                {farmer ? farmer.name : null} - 
                {farmer ? farmer.email : null} - 
                {farmer ? farmer.phone : null} - 
                {farmer ? farmer.city : null}
            </li>

            <ProductsContainer farmer={farmer} />
        </div>
    )
}

export default FarmersShow;