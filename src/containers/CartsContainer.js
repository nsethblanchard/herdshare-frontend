import React, { Component } from 'react'
import CartsIndex from '../components/CartsIndex';
import CartInput from '../components/CartInput';


class CartsContainer extends Component {
    render() {
        return (
            <div>
                <CartInput />
                <CartsIndex />
            </div>
        )
    }
}

export default CartsContainer;
