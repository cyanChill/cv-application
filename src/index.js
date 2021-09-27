import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CVProvider } from "./CVContext";

ReactDOM.render(
  <React.StrictMode>
    <CVProvider>
      <App />
    </CVProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
