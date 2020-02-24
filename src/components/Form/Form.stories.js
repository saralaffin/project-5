import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form";
import Counter from "./Counter";
import TextInputWithButton from "./TextInputWithButton";
import Checkbox from "./Checkbox";

let types = ["text", "dropdown"];
// , "counter", "text-and-button", "checkbox"];
let sizes = ["", "Medium", "Large"];
let borders = ["", "Border"];

// text inputs
sizes.forEach(size => {
  storiesOf("Form", module).add("Email " + size, () => (
    <Form
      placeholder="email"
      type="text"
      label="Email"
      size={size.toLowerCase()}
    />
  ));
});

//dropdown menus
borders.forEach(border => {
  sizes.forEach(size => {
    storiesOf("Form", module).add("Dropdown " + size + " " + border, () => (
      <Form
        type="dropdown"
        size={size.toLowerCase()}
        options={["Select", "a", "b", "c"]}
        border={border}
      />
    ));
  });
});

// counter
storiesOf("Form", module).add("Counter", () => (
  <Counter min={1} max={10} step={2} value={5} />
));
//text input with button
storiesOf("Form", module).add("Text Input with Button", () => (
  <TextInputWithButton
    placeholder="Voucher code"
    buttonText="Redeem"
    size="large"
    onSubmit={() => console.log("clicked!")}
  />
));
//checkboxes
storiesOf("Form", module)
  .add("Checkbox Blue Unchecked", () => <Checkbox color="blue" />)
  .add("Checkbox Black Checked", () => <Checkbox color="black" checked />)
  .add("Checkbox With Text", () => (
    <Checkbox color="black" checked text="Don’t show this popup again" />
  ));
