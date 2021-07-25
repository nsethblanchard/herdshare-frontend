import React, { Component } from "react";
import { connect } from "react-redux";
import {Route, Switch} from 'react-router-dom'

import { fetchFarmers } from "../actions/fetchFarmers";
import FarmersList from "../components/FarmersList";
import FarmerInput from "../components/FarmerInput";
import Farmershow from "../components/Farmershow";

class FarmersContainer extends Component {
  componentDidMount() {
    this.props.fetchFarmers();
  }

  render() {
    return (
      <div>
        <Switch>
          {/* Switch will choose the FIRST route that matches the path-this keeps a show page coming up on our new form*/}
          <Route path='/farmers/new' component={FarmerInput}/>
          <br />
          <Route path='/farmers/:id' render={(routerProps) => <Farmershow {...routerProps} farmers={this.props.farmers} />}/>
          <br />
          <Route exact path='/farmers' render={(routerProps) => <FarmersList {...routerProps} farmers={this.props.farmers} />}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Farmers: state.farmer.farmers,
  };
};

export default connect(mapStateToProps, { fetchFarmers })(FarmersContainer);
