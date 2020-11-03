import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import RecommendTap from "./Pages/Recommend/RecommendTap";
import Joblist from "./Pages/Joblist/Joblist";
import DetailPage from "./Pages/Login/DetailPage/DetailPage";
import Salary from "./Pages/Salary/Salary";
import Footer from "./Components/Footer/Footer";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/newIntro" />
          <Route exact path="/joblist" component={Joblist} />
          <Route exact path="/joblist/:main" component={Joblist} />
          <Route exact path="/joblist/:main/:sub" component={Joblist} />
          <Route exact path="/detail/:id" component={DetailPage} />
          <Route exact path="/salary" component={Salary} />
          <Route exact path="/recommend" component={RecommendTap} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
