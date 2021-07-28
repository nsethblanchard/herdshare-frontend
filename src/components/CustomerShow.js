import React from 'react';
// import { Redirect } from 'react-router-dom';


const CustomerShow = (props) => {
    
    let customer = props.customers.filter(cust => cust.id === parseInt(props.match.params.id))[0]

    return (
        <div>
            <h1>Customer Show Page</h1>
            <h5>Customer's Name: {customer ? customer.name : null}</h5>
            <h5>Customer's Phone Number: {customer ? customer.phone : null}</h5>
            <h5>Customer's Location: {customer ? customer.city : null}</h5>           
        </div>
    )
}

export default CustomerShow;
