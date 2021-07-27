import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import { fetchProducts } from '../actions/fetchProducts';
import ProductsList from '../components/ProductsList';
import ProductInput from '../components/ProductInput';
import ProductShow from "../components/ProductShow";

class ProductsContainer extends Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                {/* <ProductInput products={this.props.farmer && this.props.farmer.products} farmer={this.props.farmer && this.props.farmer}/>
                <ProductsList products={this.props.farmer && this.props.farmer.products}/>             */}
                <Switch>
                    <Route path='/products/new' component={ProductInput}/>
                    <br />
                    <Route path='/products/:id' render={(routerProps) => <ProductShow {...routerProps} products={this.props.products} />}/>
                    <br />
                    <Route exact path='/products' render={(routerProps) => <ProductsList {...routerProps} products={this.props.products} />}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products
    }
}



export default connect(mapStateToProps, {fetchProducts})(ProductsContainer);
