require("babel-core/polyfill");
require("normalize.css/normalize.css");
require("./style.css");

import React from "react";
import MyComponent from "./my-component";

window.document.addEventListener("DOMContentLoaded", () => {
  const appEl = window.document.getElementById("app");
  React.render(<MyComponent/>, appEl);
});
