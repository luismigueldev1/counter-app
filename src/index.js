import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CounterApp from "./CounterApp";
//import PrimeraApp from "./PrimeraApp";

const root = document.querySelector("#root");

ReactDOM.render(
  <React.StrictMode>
    <CounterApp value={1} />
  </React.StrictMode>,
  root
);

// ReactDOM.render(
//   <React.StrictMode>
//     <CounterApp value={0} />
//   </React.StrictMode>,
//   root
// );
