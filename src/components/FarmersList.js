import React from 'react';
// import FarmerShow from './FarmerShow';
import { Link } from 'react-router-dom';

const FarmersList = (props) => {
    return(
        <div>
            {props.farmers.map(farmer => 
            <li className="farmer-nav-links" key={farmer.id}>
                <Link to={`/farmers/${farmer.id}`}>
                    <button type="button">{farmer.name}</button>
                </Link>
            </li> 
            )}
        </div>
    )
}
export default FarmersList;