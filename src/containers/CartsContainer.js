import React, { Component } from 'react'
import {connect} from 'react-redux'
import CartsList from '../components/CartsList';
import CartInput from '../components/CartInput';


class CartsContainer extends Component {
    render() {
        return (
            <div>
                <CartInput />
                <CartsList />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carts: state.carts
    }
}



export default connect(mapStateToProps)(CartsContainer);
