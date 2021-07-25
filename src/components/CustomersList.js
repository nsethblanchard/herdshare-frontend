import React from 'react';
import CustomerShow from './CustomerShow';
import { Route, Link } from 'react-router-dom';

const CustomersList = (props) => {
    return(
        <div>
            {props.customers.map(customer => 
            <li key={customer.id}>
                <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
            </li> 
            )}
        </div>
    )
}
export default CustomersList;