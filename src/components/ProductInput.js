import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions/addProduct";

class ProductInput extends React.Component {
  
  state = { name: "", variety: "", price: "" };
  

  handleChange = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state, farmer_id: this.props.farmer.id
    })
    console.log('inside product form', this.state)
    this.props.addProduct(this.state);
    this.setState({
      name: "", variety: "", price: "", farmer_id: ""
    })
  };

  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>New Product Form</h2>
          <label>Product Name: </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
            value={this.state.name}
          />
          <br />
          <label>Product Variety: </label>
          <input
            type="text"
            name="variety"
            onChange={this.handleChange}
            placeholder="variety or type"
            value={this.state.variety}
          />
          <br />
          <label>Product Price: $</label>
          <input
            type="text"
            name="price"
            onChange={this.handleChange}
            placeholder="0.00"
            value={this.state.price}
          />
          <br />
          <br />
          <input type="submit" value="Create New Product" />
        </form>
      </div>
    );
  }
}


export default connect(null, { addProduct })(ProductInput);
