import React from 'react';
import { useLocation } from 'react-router-dom';


const FarmerShow = () => {
    const location = useLocation()
    const { farmer } = location.state
    
    return (
        <div>
            <h1>Farmer Show Page</h1>
            <h5>Farmer's Name: {farmer.name}</h5>
            <h5>Farmer's Phone Number: {farmer.phone}</h5>
            <h5>Farmer's Location: {farmer.city}</h5>
        </div>
    )
}
export default FarmerShow;