import React, { Component } from 'react'

export class practice extends Component {
    state={answer: ""}

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value,
          });
    }

    render() {
        return (
            <div>
                <form onChange={this.handleChange}>
                    <input type="text" name="answer" value={this.state.answer}></input >
                    <input type="submit"></input>
                </form>

                <p>{this.state.answer.length}</p>
            </div>
        )
    }
}

export default practice


// an input- and p tag- input is whatever and the p tag counts the number of characters