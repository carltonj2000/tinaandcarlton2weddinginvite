import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Routes } from "../utils/routes";

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
      <h3>
        January 18<sup>th</sup>, 2018
      </h3>
    </Date>
    <Table>
      <tbody>
        <Tr>
          <Th>Time</Th>
          <Th>Event</Th>
        </Tr>
        <Tr>
          <Td>11:15 AM</Td>
          <Td>
            <Link to={Routes.schedule}>Flamingo Hotel - Arrive &amp; Park</Link>
          </Td>
        </Tr>
        <Tr>
          <Td>11:30 AM</Td>
          <Td>
            Flamingo Garden - Guest Self Tour &amp; Photos<br />
            Tina arrives before guests
          </Td>
        </Tr>
        <Tr>
          <Td>11:40 AM</Td>
          <Td>
            Chapel - Guest seat themselves in outside chapel garden venue<br />
            Carlton arrives, speaks to chapel, then joins guests.
          </Td>
        </Tr>
        <Tr>
          <Td>12:00 PM</Td>
          <Td>Chapel - Cermony Starts</Td>
        </Tr>
        <Tr>
          <Td>12:30 PM</Td>
          <Td>Chapel - Cermony Ends - Photos Starts</Td>
        </Tr>
        <Tr>
          <Td>12:45 PM</Td>
          <Td>Chapel - Depart Grounds</Td>
        </Tr>
        <Tr>
          <Td>1:00 PM</Td>
          <Td>
            <Link to={Routes.directions}>Drive - To Lake LV</Link>
          </Td>
        </Tr>
        <Tr>
          <Td>1:45 PM</Td>
          <Td>
            <a href="https://goo.gl/maps/Nv6sCSpg1312">Mountain Lake Park</a> -
            Break spot if needed.
          </Td>
        </Tr>
        <Tr>
          <Td>2:30 PM</Td>
          <Td>Lake - Family Photos</Td>
        </Tr>
        <Tr>
          <Td>3:00 PM</Td>
          <Td>Lake - Tina &amp; Carlton's Photos</Td>
        </Tr>
        <Tr>
          <Td>4:00 PM</Td>
          <Td>Mimi's - Group Photos</Td>
        </Tr>
        <Tr>
          <Td>4:30 PM</Td>
          <Td>Mimi's - Dinner Start</Td>
        </Tr>
        <Tr>
          <Td>6:30 PM</Td>
          <Td>Mimi's - Dinner End</Td>
        </Tr>
        <Tr>
          <Td>8:00 PM</Td>
          <Td>Drinks - Tina &amp; Carlton's Home</Td>
        </Tr>
      </tbody>
    </Table>
  </Container>
);
