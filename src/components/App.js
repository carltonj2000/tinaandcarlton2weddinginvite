import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Cars from "./Cars";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Cars} />
          <Route path="/cars" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
