import React from 'react';
import { Link } from 'react-router-dom'; 

const CustomersList = (props) => {
    
    return(
        <div>
            <h3>List of all Current Customers</h3>
            {props.customers.map(customer => 
            <div className="farmer-nav-links" key={customer.id}>             
                <Link to={{pathname: `/customers/${customer.id}`, state: {customer: customer},}}>
                     <button type="button">{customer.name}</button>
                </Link>
            </div>
            )}
        </div>
    )
}
export default CustomersList;