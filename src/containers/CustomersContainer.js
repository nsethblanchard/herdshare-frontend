import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCustomers } from "../actions/fetchCustomers";
import CustomersList from "../components/CustomersList";
import CustomerInput from "../components/CustomerInput";

class CustomersContainer extends Component {
  async componentDidMount() {
    await this.props.fetchCustomers();
  }

  render() {
    return (
      <div>
        <CustomerInput />
        <br />
        <h3>List of Current Customers</h3>
        <CustomersList customers={this.props.customers} />
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
