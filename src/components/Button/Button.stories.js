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
          label="Do Something"
          type={type.toLowerCase()}
          size={size.toLowerCase()}
          variation={vari.toLowerCase()}
        />
      ));
    });
  });
});
storiesOf("Button", module)
  .add("Add To Cart", () => (
    <Button
      label="Add To Cart"
      type="primary"
      variation="faded"
      icon={<Cart type="primary" />}
    />
  ))
  .add("Add To Favorites", () => (
    <Button
      label="Add to Favorites"
      type="primary"
      variation="faded"
      icon={<Heart type="primary" />}
    />
  ))
  .add("Cart icon", () => (
    <Button type="primary" variation="faded" icon={<Cart type="primary" />} />
  ))
  .add("Heart icon", () => (
    <Button type="primary" variation="faded" icon={<Heart type="primary" />} />
  ));
