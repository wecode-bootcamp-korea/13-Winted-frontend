import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn/LogIn";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/newIntro" component={LogIn} />
        </Switch>
      </Router>
    );
  }
}
