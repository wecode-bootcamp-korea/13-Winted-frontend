import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecommendTap from "./Pages/Recommend/RecommendTap";
import Joblist from "./Pages/Joblist/Joblist";
import DetailPage from "./Pages/Login/DetailPage/DetailPage";

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
          <Route exact path="/detail/:id" component={DetailPage} />
        </Switch>
      </Router>
    );
  }
}
