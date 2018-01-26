import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Layout from "./Layout.js";
import Home from "./Home";
import Directions from "./Directions";
import Schedule from "./Schedule";
import Cars from "./Cars";
import Support from "./Support";
import Seating from "./Seating";

import { Routes } from "../utils/routes.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Layout active="home">
            <Route exact path={Routes.home} component={Home} />
            <Route path={Routes.directions} component={Directions} />
            <Route path={Routes.schedule} component={Schedule} />
            <Route path={Routes.seating} component={Seating} />
            <Route path={Routes.cars} component={Cars} />
            <Route path={Routes.support} component={Support} />
          </Layout>
        </Container>
      </Router>
    );
  }
}

export default App;
