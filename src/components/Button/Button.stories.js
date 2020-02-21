import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

let types = ["Primary", "Success", "Danger", "Warning", "Default"];
let variations = ["", " large"];

variations.forEach(vari => {
  types.forEach(type => {
    storiesOf("Button", module).add(type + vari, () => (
      <Button label={type + vari} type={type.toLowerCase()} />
    ));
  });
});
