import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Life from "./pages/demo/Life";
import Admin from "./Admin";
import RouteDemo1 from "./pages/route_demo/route2/router";
import { Provider } from "react-redux"; // 添加<Provider />项目根组件
import Router from "./Router";
import configureStore from "./redux/store/configureStore";
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Router />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
