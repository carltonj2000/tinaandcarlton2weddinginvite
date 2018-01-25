import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Layout from "./Layout.js";
import Home from "./Home";
import Cars from "./Cars";

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
            <Route path={Routes.cars} component={Cars} />
          </Layout>
        </Container>
      </Router>
    );
  }
}

export default App;
