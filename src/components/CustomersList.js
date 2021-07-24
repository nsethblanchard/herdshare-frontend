import React from 'react';
import CustomerShow from './CustomerShow';

const CustomersList = (props) => {
    return(
        <div>
            {props.customers.map(customer => 
            <div key={customer.id}><CustomerShow customer={customer}/></div> )}
        </div>
    )
}
export default CustomersList;