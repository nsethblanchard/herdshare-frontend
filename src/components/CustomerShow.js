import React from 'react';


const CustomerShow = (props) => {
    
    return(
        <li>
            {props.customer.name} - {props.customer.email} - {props.customer.phone} - {props.customer.city}
        </li>
    )


}

export default CustomerShow;
