import React from "react";
import logo from "./logo.svg";
import "./App.css";
export default class App extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
