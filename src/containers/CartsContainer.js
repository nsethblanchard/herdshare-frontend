import React, { Component } from 'react'
import {connect} from 'react-redux'

import { fetchCarts } from '../actions/fetchCarts';
import CartsList from '../components/CartsList';
import CartInput from '../components/CartInput';


class CartsContainer extends Component {

    componentDidMount() {
        this.props.fetchCarts()
    }


    render() {
        return (
            <div>
                <CartInput />
                <CartsList carts={this.props.carts}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carts: state.carts
    }
}



export default connect(mapStateToProps, {fetchCarts})(CartsContainer);
