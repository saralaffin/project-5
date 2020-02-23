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
          onClick={() => {
            // subtract step from current count in conditional so count doesn't go below min
            if (this.state.count - this.props.step >= this.props.min) {
              this.setState({ count: this.state.count - this.props.step });
            }
          }}
        >
          -
        </div>
        <p>{this.state.count}</p>
        <div
          className="counter-button"
          onClick={() => {
            if (this.state.count + this.props.step <= this.props.max) {
              this.setState({ count: this.state.count + this.props.step });
            }
          }}
        >
          +
        </div>
      </div>
    );
  }
}

export default Counter;
