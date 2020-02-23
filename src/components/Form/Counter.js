import React, { Component } from "react";
import "./Form.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.value
    };
  }
  render() {
    return (
      <div className="counter">
        <div
          className="counter-button"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          -
        </div>
        <p>{this.state.count}</p>
        <div
          className="counter-button"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </div>
      </div>
    );
  }
}

export default Counter;
