import React from "react";
import { Link } from "react-router-dom";
export default class Main extends React.Component {
  render() {
    return (
      <div>
        This is main page
        <Link to="/main/a"> 前套路由 Sub Element</Link>
        <hr></hr>
        {this.props.children}
      </div>
    );
  }
}
