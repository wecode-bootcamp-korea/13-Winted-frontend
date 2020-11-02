import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecommendTap from "./Pages/Recommend/RecommendTap";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/recommendTap" component={RecommendTap} />
        </Switch>
      </Router>
    );
  }
}
