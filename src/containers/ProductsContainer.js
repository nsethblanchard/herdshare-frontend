import React, { Component } from 'react'
import {connect} from 'react-redux'

import { fetchProducts } from '../actions/fetchProducts';
import ProductsList from '../components/ProductsList';
import ProductInput from '../components/ProductInput';


class ProductsContainer extends Component {

    componentDidMount() {
        this.props.fetchProducts()
    }


    render() {
        return (
            <div>
                <ProductInput />
                <ProductsList products={this.props.products}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}



export default connect(mapStateToProps, {fetchProducts})(ProductsContainer);
