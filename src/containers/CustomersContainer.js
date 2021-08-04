import React, { Component } from "react";
import { connect } from "react-redux";
// import {Route, Switch} from 'react-router-dom'


import { fetchCustomers } from "../actions/fetchCustomers";
import CustomersList from "../components/CustomersList";
// import CustomerInput from "../components/CustomerInput";
// import CustomerShow from "../components/CustomerShow";

class CustomersContainer extends Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  render() {
    return (
      <div>
        <CustomersList customers={this.props.customers}/>
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
