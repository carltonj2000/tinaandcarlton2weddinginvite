import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Routes } from "../utils/routes";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  grid-gap: 10px;
  opacity: 0.5;
  background: lightyellow;
  padding: 10px;
`;
const style = {
  fontFamily: "Arial",
  fontWeight: "bold",
  margin: "5px",
  textDecoration: "none",
  color: "darkgoldenrod"
};
const styleActive = {
  textDecoration: "underline overline",
  color: "green"
};

export default () => (
  <Container>
    <NavLink exact to={Routes.home} style={style} activeStyle={styleActive}>
      Home
    </NavLink>
    <NavLink to={Routes.cars} style={style} activeStyle={styleActive}>
      Cars
    </NavLink>
  </Container>
);

/*
<Lnk link="home" active={props.active} />
<Lnk link="directions" active={props.active} />
<Lnk link="schedule" active={props.active} />
<Lnk link="seating" active={props.active} />
<Lnk link="cars" active={props.active} />
<Lnk link="support" active={props.active} />
*/
