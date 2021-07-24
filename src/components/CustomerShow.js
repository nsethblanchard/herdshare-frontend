import React from 'react';


const CustomerShow = (props) => {
    
    let customer = props.customers[props.match.params.id - 1]

    return (
        <li>
            {customer ? customer.name : null} - 
            {customer ? customer.email : null} - 
            {customer ? customer.phone : null} - 
            {customer ? customer.city : null}
        </li>
    )


}

export default CustomerShow;
