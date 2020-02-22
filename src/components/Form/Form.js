import React from "react";
import "./Form.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Form = props => {
  let placeholderText = props.placeholder || props.label;

  let classList = ` Form-${props.size} Form-${props.variation}`;
  let style = {};
  let types = ["text", "dropdown", "counter", "text-and-button", "checkbox"];

  let labelText = () => {
    if (props.label) {
      return (
        <>
          <label>{props.label}</label>
          <br />
        </>
      );
    } else {
      return null;
    }
  };

  if (props.type === "text") {
    return (
      <form className={classList} style={style}>
        <p>
          {labelText()}
          <input type={props.type} placeholder={placeholderText} />
        </p>
      </form>
    );
  } else {
    return null;
  }
};

export default Form;
