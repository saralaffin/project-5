import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = props => {
  let classList = ` button-${props.size} button-${props.variation}`;
  let style = {};
  let types = ["primary", "success", "danger", "warning"];
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }
  if (props.variation === "outline" || props.variation === "faded") {
    if (types.includes(props.type)) {
      style = { color: `var(--${props.type}-color)` };
    } else {
      style = { color: `black` };
    }
  }
  if (props.hover) {
    classList += " button-hover";
  }
  return (
    <button className={classList} style={style}>
      {props.label}
    </button>
  );
};

export default Button;
