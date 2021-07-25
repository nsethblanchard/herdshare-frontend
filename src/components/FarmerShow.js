import React from 'react';
import { Redirect } from 'react-router-dom';


const FarmersShow = (props) => {
    
    let farmers = props.farmers[props.match.params.id - 1]
    // this may not work if we delete things and cause the front end ID to not match the backend ID

    return (
        <li>

            {/* {farmers ? null : <Redirect to="/farmers"/>} */}
            {farmers ? farmers.name : null} - 
            {farmers ? farmers.email : null} - 
            {farmers ? farmers.phone : null} - 
            {farmers ? farmers.city : null}
        </li>
    )
}

export default FarmersShow;