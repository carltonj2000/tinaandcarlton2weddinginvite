import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Cars from "./Cars";

import { Routes } from "../utils/routes.js";

class App extends Component {
  render() {
    console.log(Routes);
    return (
      <Router>
        <div>
          <Route exact path={Routes.home} component={Home} />
          <Route path={Routes.cars} component={Cars} />
        </div>
      </Router>
    );
  }
}

export default App;
