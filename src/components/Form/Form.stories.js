import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form";
import Counter from "./Counter";
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
//checkbox
storiesOf("Form", module).add("Checkbox", () => (
  <Checkbox color="blue" checked />
));
