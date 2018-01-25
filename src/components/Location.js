import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  background: aqua;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Col1 = styled.div`
  font-weight: bold;
  margin-right: 20px;
  text-transform: uppercase;
`;

const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

export default () => (
  <div>
    <Container>
      <Col1>
        <div>Where &amp; When?</div>
      </Col1>
      <Col2>
        <div>Las Vegas</div>
        <div>January 18th, 2018</div>
      </Col2>
    </Container>
  </div>
);
