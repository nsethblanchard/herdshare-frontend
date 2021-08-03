import React from 'react';
import { Link } from 'react-router-dom';

const FarmersList = (props) => {
    
    return(
        <div>
            {props.farmers.map(farmer => 
            <div className="farmer-nav-links" key={farmer.id}>
                <Link to={`/farmers/${farmer.id}`}>
                    <button type="button">{farmer.name}</button>                   
                </Link>
            </div>
            )}
        </div>
    )
}
export default FarmersList;