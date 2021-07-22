import React from 'react';

const CartsList = (props) => {
    console.log(props)
    return(
        <div>
            {props.carts.map(cart => <li key={cart.id}> {cart.quantity} - {cart.customer.name}</li> )}
        </div>
    )
}
export default CartsList;