import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TransactionProvider } from "./context/TransactionContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <TransactionProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </TransactionProvider>,
  document.getElementById("root")
);
