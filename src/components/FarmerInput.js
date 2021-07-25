import React from "react";
import { connect } from "react-redux";
import { addFarmer } from "../actions/addFarmer";

class FarmerInput extends React.Component {
  state = { name: "", email: "", phone: "", city: "", animal: false, plant: false };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addFarmer(this.state);
    this.setState({
      name: "", email: "", phone: "", city: "", animal: false, plant: false 
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>New Farmer Form</h2>
          <label>Farmer Name: </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
            value={this.state.name}
          />
          <br />
          <label>Farmer Email: </label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
            value={this.state.email}
          />
          <br />
          <label>Farmer Phone: </label>
          <input
            type="text"
            name="phone"
            onChange={this.handleChange}
            placeholder="Phone"
            value={this.state.phone}
          />
          <br />
          <label>Farmer City: </label>
          <input
            type="text"
            name="city"
            onChange={this.handleChange}
            placeholder="City/State"
            value={this.state.city}
          />
          {/* <input
            type="checkbox"
            name="animal"
            onChange={this.handleChange}
            placeholder="City/State"
            value={this.state.city}
          />
          <input
            type="checkbox"
            name="plant"
            onChange={this.handleChange}
            placeholder="City/State"
            value={this.state.city}
          /> */}

          {/* Implement check boxes for booleans */}

          <br />
          <br />
          <input type="submit" value="Create New Farmer" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addFarmer })(FarmerInput);
