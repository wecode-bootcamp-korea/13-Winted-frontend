import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch></Switch>
      </Router>
    );
  }
}
