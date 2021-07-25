import React from 'react';
import { Redirect } from 'react-router-dom';


const CustomerShow = (props) => {
    
    let customer = props.customers[props.match.params.id - 1]
    // this may not work if we delete things and cause the front end ID to not match the backend ID

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
