import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form";

let types = ["text", "dropdown", "counter", "text-and-button", "checkbox"];
let sizes = ["", "Medium", "Large"];
let variations = ["", "Outline", "Faded"];

// sizes.forEach(size => {
//   variations.forEach(vari => {
//     types.forEach(type => {
//       storiesOf("Form", module).add(type + " " + size + " " + vari, () => (
//         <Form
//           label={type + " " + size + " " + vari}
//           type={type.toLowerCase()}
//           size={size.toLowerCase()}
//           variation={vari.toLowerCase()}
//         />
//       ));
//     });
//   });
// });
sizes.forEach(size => {
  storiesOf("Form", module).add("Email " + size, () => (
    <Form placeholder="email" type="text" label="Email" size={size} />
  ));
});
