import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";
import Cart from "./Cart";
import Heart from "./Heart";

let types = ["Primary", "Success", "Danger", "Warning", "Default"];
let sizes = ["", "Large"];
let variations = ["", "Outline", "Faded"];

sizes.forEach(size => {
  variations.forEach(vari => {
    types.forEach(type => {
      storiesOf("Button", module).add(type + " " + size + " " + vari, () => (
        <Button
          label={type + size + vari}
          type={type.toLowerCase()}
          size={size.toLowerCase()}
          variation={vari.toLowerCase()}
        />
      ));
    });
  });
});
storiesOf("Button", module)
  .add("Cart", () => (
    <Button
      label="Add to Cart"
      type="primary"
      variation="faded"
      icon={<Cart type="primary" />}
    />
  ))
  .add("Heart", () => (
    <Button
      label="Add to Favorites"
      type="primary"
      variation="faded"
      icon={<Cart type="primary" />}
    />
  ));
