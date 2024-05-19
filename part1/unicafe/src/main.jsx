import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Anecdotes from "./Anecdotes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Anecdotes />
  </React.StrictMode>,
);
