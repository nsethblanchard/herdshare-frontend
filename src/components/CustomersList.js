import React from 'react';

const CustomersList = (props) => {
    return(
        <div>
            {props.customers.map(customer => <li key={customer.id}>Name: {customer.name} Email: {customer.email} Phone: {customer.phone} Location: {customer.city}</li> )}
        </div>
    )
}
export default CustomersList;