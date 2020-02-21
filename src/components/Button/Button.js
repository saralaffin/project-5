import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = props => {
  let classList = "";
  let types = ["primary", "success", "danger", "warning", "default"];
  if (types.includes(props.type)) {
    classList += ` button-${props.type} button-${props.vari}`;
  }
  // if (props.vari) {
  //   classList += ` button-${props.vari}`;
  // }
  if (props.hover) {
    classList += " button-hover";
  }
  return <button className={classList}>{props.label}</button>;
};

export default Button;
