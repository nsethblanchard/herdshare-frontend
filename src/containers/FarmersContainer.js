import React, { Component } from 'react'
import {connect} from 'react-redux'

import { fetchFarmers } from '../actions/fetchFarmers';
import FarmersList from '../components/FarmersList';
import FarmerInput from '../components/FarmerInput';


class FarmersContainer extends Component {

    componentDidMount() {
        this.props.fetchFarmers()
    }


    render() {
        return (
            <div>
                <FarmerInput />
                <FarmersList farmers={this.props.farmers}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        farmers: state.farmers
    }
}



export default connect(mapStateToProps, {fetchFarmers})(FarmersContainer);
