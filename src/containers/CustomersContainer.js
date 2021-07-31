import React, { Component } from "react";
import { connect } from "react-redux";
import {Route, Switch} from 'react-router-dom'
// removed Switch from rrdom import due to errors

import { fetchCustomers } from "../actions/fetchCustomers";
import CustomersList from "../components/CustomersList";
import CustomerInput from "../components/CustomerInput";
import CustomerShow from "../components/CustomerShow";

class CustomersContainer extends Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  render() {
    return (
      <div>
{/*         
          <Switch>
            <Route path='/customers/new' component={CustomerInput}/>
            <Route path='/customers/:id' render={(routerProps) => <CustomerShow {...routerProps} customers={this.props.customers} />}/>
            <Route exact path='/customers' render={(routerProps) => <CustomersList {...routerProps} customers={this.props.customers} />}/>
          </Switch> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    customers: state.customer.customers,
  };
};

export default connect(mapStateToProps, { fetchCustomers })(CustomersContainer);
