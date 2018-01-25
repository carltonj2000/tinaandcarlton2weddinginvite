import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  grid-gap: 10px;
  opacity: 0.5;
  background: lightyellow;
  padding: 10px;
`;

export default props => (
  <div>
    <Container>
      <Router>
        <Link to="/">Cars</Link>
        <Link to="/cars">Home</Link>
      </Router>
    </Container>
  </div>
);

/*
<Lnk link="home" active={props.active} />
<Lnk link="directions" active={props.active} />
<Lnk link="schedule" active={props.active} />
<Lnk link="seating" active={props.active} />
<Lnk link="cars" active={props.active} />
<Lnk link="support" active={props.active} />
*/
