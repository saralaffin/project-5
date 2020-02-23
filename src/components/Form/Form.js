import React from "react";
import "./Form.css";
import Button from "../Button/Button";

const Form = props => {
  let placeholderText = props.placeholder || props.label;

  let classList = props.type;
  // let types = ["text", "dropdown", "counter", "text-and-button", "checkbox"];

  // conditionally add label
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

  // to fill out dropdown menu
  let options = () => {
    return props.options.map(option => {
      return <option>{option}</option>;
    });
  };

  if (props.border) {
    classList += ` dropdown-border`;
  }

  if (props.type === "text") {
    return (
      <form>
        <p>
          {labelText()}
          <input
            className={classList + ` text-${props.size}`}
            type={props.type}
            placeholder={placeholderText}
          />
        </p>
      </form>
    );
  } else if (props.type === "dropdown") {
    return (
      <form>
        <p>
          {labelText()}
          <select
            className={classList + ` dropdown-${props.size}`}
            type={props.type}
          >
            {options()}
          </select>
        </p>
      </form>
    );
  } else {
    return null;
  }
};

export default Form;
