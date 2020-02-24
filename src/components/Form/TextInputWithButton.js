import React, { Component } from "react";
import Form from "./Form";
import Button from "../Button/Button";

class TextInputWithButton extends Component {
  render() {
    return (
      <div onSubmit={this.props.onSubmit}>
        <Form
          placeholder={this.props.placeholder}
          type="text"
          size={this.props.size}
        />
        <Button label={this.props.buttonText} type="primary" />
      </div>
    );
  }
}

export default TextInputWithButton;
