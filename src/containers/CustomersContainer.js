import React, { Component } from "react";
import { connect } from "react-redux";
import {Route} from 'react-router-dom'

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
        <Route path='/customers/new' component={CustomerInput}/>
        {/* <CustomerInput /> */}
        <br />
        <Route path='/customers/:id' render={(routerProps) => <CustomerShow {...routerProps} customers={this.props.customers} />}/>
        <br />
        <Route exact path='/customers' render={(routerProps) => <CustomersList {...routerProps} customers={this.props.customers} />}/>
        {/* <CustomersList customers={this.props.customers} /> */}
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
