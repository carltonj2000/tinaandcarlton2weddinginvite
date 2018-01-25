import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;
const Date = styled.div`
display: flex;
background: aqua;
justify-content center;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-bottom: 1px solid gray;
`;
const Th = styled.th`
  border-bottom: 1px solid gray;
  text-align: left;
`;
const Td = styled.td`
  border-bottom: 1px solid gray;
  padding-top: 5px;
`;
const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: aqua;
  }
`;
export default props => (
  <Container>
    <Date>
      <h3>Start Your Engins</h3>
    </Date>
    <Table>
      <tbody>
        <Tr>
          <Th>Driver</Th>
          <Th>Car</Th>
          <Th>Passangers</Th>
          <Th>Cnt</Th>
        </Tr>
        <Tr>
          <Td>Corey</Td>
          <Td>Sliver Pilot</Td>
          <Td>Anh, Paulyne Tam, An, Kevin, Nguyen</Td>
          <Td>7</Td>
        </Tr>
        <Tr>
          <Td>Cheryl</Td>
          <Td>Black Tacoma</Td>
          <Td>Jason, Frank, Eileen</Td>
          <Td>4</Td>
        </Tr>
        <Tr>
          <Td>Brian</Td>
          <Td>White Civic</Td>
          <Td>Cermony Only</Td>
          <Td>1</Td>
        </Tr>
        <Tr>
          <Td>Bobby</Td>
          <Td>White Civic</Td>
          <Td>Deanna, Todd</Td>
          <Td>3</Td>
        </Tr>
        <Tr>
          <Td>Debbie</Td>
          <Td>Rental</Td>
          <Td>Alex, Leona, Teresa</Td>
          <Td>4</Td>
        </Tr>
        <Tr>
          <Td>Cyril</Td>
          <Td>Rental</Td>
          <Td>Joyce, Tina, Carlton</Td>
          <Td>4</Td>
        </Tr>
        <Tr>
          <Td>Jeff</Td>
          <Td>Rental</Td>
          <Td>Wendy, Sabrina, Eli</Td>
          <Td>4</Td>
        </Tr>
      </tbody>
    </Table>
  </Container>
);
