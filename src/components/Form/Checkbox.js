import React, { Component } from "react";
import "./Checkbox.css";

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
      classList: `Checkbox checkbox-${props.color}`
    };
  }
  clickHandle = () => {
    this.setState({ checked: !this.state.checked });
  };
  displaySvg = () => {
    if (this.state.checked) {
      return (
        <svg
          className={`svg-${this.props.color}`}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
        >
          <g>
            <g>
              <path
                fill="none"
                stroke="#fff"
                stroke-miterlimit="50"
                stroke-width="2"
                d="M1.5 3.978v0l2.67 2.67v0L9.32 1.5v0"
              />
            </g>
          </g>
        </svg>
      );
    } else {
      return null;
    }
  };
  render() {
    return (
      <div className={this.state.classList} onClick={this.clickHandle}>
        {this.displaySvg()}
      </div>
    );
  }
}

export default Checkbox;
