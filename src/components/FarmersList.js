import React from 'react';
// import FarmerShow from './FarmerShow';
import { Link } from 'react-router-dom';

const FarmersList = (props) => {
    return(
        <div>
            <h3>List of all Farmers</h3>
            {props.farmers.map(farmer => 
            <li key={farmer.id}>
                <Link to={`/farmers/${farmer.id}`}>{farmer.name}</Link>
            </li> 
            )}
        </div>
    )
}
export default FarmersList;