import React from "react";

class CustomerInput extends React.Component {
  state = { name: "", email: "", phone: "", city: "" };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <h2>New Customer Form</h2>
          <label>Customer Name: </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
            value={this.state.name}
          />
          <br />
          <label>Customer Email: </label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
            value={this.state.email}
          />
          <br />
          <label>Customer Phone: </label>
          <input
            type="text"
            name="phone"
            onChange={this.handleChange}
            placeholder="Phone"
            value={this.state.phone}
          />
          <br />
          <label>Customer City: </label>
          <input
            type="text"
            name="city"
            onChange={this.handleChange}
            placeholder="City/State"
            value={this.state.city}
          />
          <br />
        </form>
      </div>
    );
  }
}

export default CustomerInput;
