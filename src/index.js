import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Life from "./pages/demo/Life";
import Admin from "./Admin";
import RouteDemo from "./pages/route_demo/route1/home";
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Admin />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
