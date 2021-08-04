import React from 'react';
import { useLocation } from 'react-router-dom';


const CustomerShow = () => {
    const location = useLocation()
    const { customer } = location.state
    

    return (
        <div>
            <h1>Customer Show Page</h1>
            <h5>Customer's Name: {customer.name}</h5>
            <h5>Customer's Phone Number: {customer.phone}</h5>
            <h5>Customer's Location: {customer.city}</h5>           
        </div>
    )
}

export default CustomerShow;
