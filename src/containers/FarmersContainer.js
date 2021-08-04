import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchFarmers } from "../actions/fetchFarmers";
import FarmersList from "../components/FarmersList";
import FarmerInput from "../components/FarmerInput";


class FarmersContainer extends Component {
  state = {display: false}

  componentDidMount() {
    this.props.fetchFarmers();
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render() {
    
    return (
      <div>
                
        <FarmersList farmers={this.props.farmers}/>
        
        <br></br>
        <br></br>
        <h4>If you are new, please create your profile</h4>
        
        <div>
          <button onClick={this.handleClick}> Add a Farmer </button>
        </div>

        {this.state.display ? <FarmerInput /> : null} 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    farmers: state.farmer.farmers,
  };
};

export default connect(mapStateToProps, { fetchFarmers })(FarmersContainer);
