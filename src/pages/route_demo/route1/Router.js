import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import Main from "./Main";
export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Switch></Switch>
          <Route
            path="/main"
            render={() => (
              <Main>
                <Route path="/main/:value" component={Info}></Route>
              </Main>
            )}
          ></Route>
          <Route path="/about"></Route>
        </Home>
      </Router>
    );
  }
}
