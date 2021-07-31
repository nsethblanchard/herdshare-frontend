import React from 'react';
// import CustomerShow from './CustomerShow';
import { Link } from 'react-router-dom'; 


const CustomersList = (props) => {
    
    return(
        <div>
            <h3>List of all Current Customers</h3>
            {props.customers.map(customer => 
            <li key={customer.id}>
                <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
            </li> 
            )}
        </div>
    )
}
export default CustomersList;