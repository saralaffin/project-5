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

  //render button if given button
  let buttonRender = () => {
    if (props.buttonText) {
      return (
        <Button
          label={props.buttonText}
          type="primary"
          onClick={props.onSubmit}
        />
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

  if (props.type === "text" && !props.buttonText) {
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
  } else if (props.type === "text" && props.buttonText) {
    return (
      <form onSubmit={props.onSubmit}>
        <p
          className={`text-input-with-button text-input-with-button-${props.size}`}
        >
          <input
            className={classList + ` text-${props.size}`}
            type={props.type}
            placeholder={placeholderText}
          />
          <div className="button-in-text-input">{buttonRender()}</div>
        </p>
      </form>
    );
  } else if (props.type === "dropdown") {
    return (
      <form onSumbit>
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
