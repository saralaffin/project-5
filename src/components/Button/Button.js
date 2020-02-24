import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = props => {
  let classList = "Button";
  let style = {};
  let types = ["primary", "success", "danger", "warning"];
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }
  if (props.size) {
    classList += ` button-${props.size}`;
  }
  if (props.variation) {
    classList += ` button-${props.variation}`;
  }
  if (props.variation === "outline" || props.variation === "faded") {
    if (types.includes(props.type)) {
      style = { color: `var(--${props.type}-color)` };
    } else {
      style = { color: `black` };
    }
  }
  if (props.variation === "faded") {
    if (types.includes(props.type)) {
      style = {
        ...style,
        border: `var(--${props.type}-color-faded)`,
        backgroundColor: `var(--${props.type}-color-faded)`
      };
    } else {
      style = {
        ...style,
        border: `rgba(34, 38, 42, 0.1)`,
        backgroundColor: `rgba(34, 38, 42, 0.1)`
      };
    }
  }
  if (props.hover) {
    classList += " button-hover";
  }
  if (props.icon && props.label) {
    return (
      <button
        className={classList + " button-icon"}
        style={style}
        onClick={props.onClick}
      >
        <span>{props.icon}</span>
        <span>{props.label}</span>
      </button>
    );
  } else if (props.icon && !props.label) {
    return (
      <button
        className={classList + " button-icon"}
        style={style}
        onClick={props.onClick}
      >
        <span>{props.icon}</span>
      </button>
    );
  } else {
    return (
      <button className={classList} style={style} onClick={props.onClick}>
        {props.label}
      </button>
    );
  }
};

export default Button;
