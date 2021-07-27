import React, { Component } from "react";
import { connect } from "react-redux";
import {Route, Switch} from 'react-router-dom'

import { fetchFarmers } from "../actions/fetchFarmers";
import FarmersList from "../components/FarmersList";
import FarmerInput from "../components/FarmerInput";
import FarmerShow from "../components/FarmerShow";

class FarmersContainer extends Component {
  componentDidMount() {
    this.props.fetchFarmers();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/farmers/new' component={FarmerInput}/>
          <Route path='/farmers/:id' render={(routerProps) => <FarmerShow {...routerProps} farmers={this.props.farmers} />}/>
          <Route exact path='/farmers' render={(routerProps) => <FarmersList {...routerProps} farmers={this.props.farmers} />}/>
          </Switch>
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
