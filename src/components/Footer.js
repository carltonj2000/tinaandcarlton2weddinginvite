import React from "react";
import styled from "styled-components";

const IMG_0976 = require("../images/footer/optimized/IMG_0976.JPG");
const IMG_0980 = require("../images/footer/optimized/IMG_0980.JPG");

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: aqua;
  color: black;
  opacity: 0.5;
  margin-top: 15px;
`;

export default () => (
  <Container>
    <img src={IMG_0976} alt="rings 1" />
    <p>Copyright &copy; Carlton &amp; Tina Joseph</p>
    <img src={IMG_0980} alt="rings 2" />
  </Container>
);
