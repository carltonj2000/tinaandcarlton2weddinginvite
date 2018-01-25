import React from "react";
import styled from "styled-components";

import Layout from "./Layout.js";

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
`;
/*
  table,
  th,
  td {
    border-bottom: 1px solid gray;
  }
  th {
    text-align: left;
  }
  td {
    padding-top: 5px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: aqua;
  }
*/
export default props => (
  <Layout active="cars">
    <Container>
      <Date>
        <h3>Start Your Engins</h3>
      </Date>
      <Table>
        <tbody>
          <tr>
            <th>Driver</th>
            <th>Car</th>
            <th>Passangers</th>
            <th>Cnt</th>
          </tr>
          <tr>
            <td>Corey</td>
            <td>Sliver Pilot</td>
            <td>Anh, Paulyne Tam, An, Kevin, Nguyen</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Cheryl</td>
            <td>Black Tacoma</td>
            <td>Jason, Frank, Eileen</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Brian</td>
            <td>White Civic</td>
            <td>Cermony Only</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Bobby</td>
            <td>White Civic</td>
            <td>Deanna, Todd</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Debbie</td>
            <td>Rental</td>
            <td>Alex, Leona, Teresa</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Cyril</td>
            <td>Rental</td>
            <td>Joyce, Tina, Carlton</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Jeff</td>
            <td>Rental</td>
            <td>Wendy, Sabrina, Eli</td>
            <td>4</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  </Layout>
);
