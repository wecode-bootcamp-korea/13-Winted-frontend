import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecommendTap from "./Pages/Recommend/RecommendTap";
import Joblist from "./Pages/Joblist/Joblist";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/recommendTap" component={RecommendTap} />
          <Route exact path="/joblist" component={Joblist} />
          <Route exact path="/joblist/:main" component={Joblist} />
          <Route exact path="/joblist/:main/:sub" component={Joblist} />
        </Switch>
      </Router>
    );
  }
}
