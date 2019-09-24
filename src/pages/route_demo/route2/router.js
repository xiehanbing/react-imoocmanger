import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Main from "./../route1/Main";
import Info from "./../route1/Info";
import Topics from "./../route1/Topics";
import About from "./../route1/About";
import Home from "./Home";
export default class IRouter extends React.Component {
  //      exact={true} 精准匹配 不能 进入 子路由
  render() {
    return (
      <Router>
        <Home>
          <Route
            path="/main"
            render={() => (
              <Main>
                <Route path="/main/a" component={About}></Route>
              </Main>
            )}
          ></Route>
          <Route exact={true} path="/about" component={About}></Route>
          <Route exact={true} path="/topics" component={Topics}></Route>
        </Home>
      </Router>
    );
  }
}
