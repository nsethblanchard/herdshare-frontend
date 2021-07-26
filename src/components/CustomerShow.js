import React from 'react';
// import { Redirect } from 'react-router-dom';


const CustomerShow = (props) => {
    
    let customer = props.customers.filter(cust => cust.id === parseInt(props.match.params.id))[0]

    return (
        <li>

            {/* {customer ? null : <Redirect to="/customers"/>} */}
            {customer ? customer.name : null} - 
            {customer ? customer.email : null} - 
            {customer ? customer.phone : null} - 
            {customer ? customer.city : null}
        </li>
    )
}

export default CustomerShow;
