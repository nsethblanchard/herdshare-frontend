import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import { fetchProducts } from '../actions/fetchProducts';
import ProductsList from '../components/ProductsList';
import ProductInput from '../components/ProductInput';
import ProductShow from "../components/ProductShow";

class ProductsContainer extends Component {
    // state = {display: false}

    componentDidMount() {
        this.props.fetchProducts()
    }

    // handleClick = () => {
    //     let newBoolean = !this.state.display
    //     this.setState({
    //       display: newBoolean
    //     })
    //   }

    render() {
        return (
            <div>
                {/* <ProductsList products={this.props.farmer && this.props.farmer.products}/> 
                <br/>
                <br/>
                <div>
                    <button onClick={this.handleClick}> Make a new Product </button>
                </div>           
                
                { this.state.display
                        ?
                    <ProductInput products={this.props.farmer && this.props.farmer.products} farmer={this.props.farmer && this.props.farmer}/>
                        :
                    null
                } */}
                
                <Switch>
                    <Route exact path='/products' render={(routerProps) => <ProductsList {...routerProps} products={this.props.products} />}/>
                    <Route path='farmers/:farmer_id/products/new' component={ProductInput}/>
                    <Route path='farmers/:farmer_id/products/:id' render={(routerProps) => <ProductShow {...routerProps} products={this.props.products} />}/>  
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
