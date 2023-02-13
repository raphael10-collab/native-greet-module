import React from "react";
import ReactDOM from "react-dom";

const greetModule = require('../build/Release/greet.node')

const App = () => (
  <h1>My React and TypeScript App!</h1>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
