import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCustomers } from "../actions/fetchCustomers";
import CustomersList from "../components/CustomersList";
import CustomerInput from "../components/CustomerInput";

class CustomersContainer extends Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  render() {
    return (
      <div>
        <CustomerInput />
        <br />
        <CustomersList customers={this.props.customers} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    customers: state.customers,
  };
};

export default connect(mapStateToProps, { fetchCustomers })(CustomersContainer);
