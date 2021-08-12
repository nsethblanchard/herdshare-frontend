import React, { Component } from 'react'
import {connect} from 'react-redux'


import { fetchProducts } from '../actions/fetchProducts';
import ProductsList from '../components/ProductsList';


class ProductsContainer extends Component {
    

    componentDidMount() {
        this.props.fetchProducts()
    }
    render() {
        
        
        return (
            <div>
                <ProductsList products={this.props.products}/>
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('inside product container', state.product)
    return {
        products: state.product.products
    }
}

export default connect(mapStateToProps, {fetchProducts})(ProductsContainer);
