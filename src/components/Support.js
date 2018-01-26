import React from "react";

import { Container, Date, Table, Th, Tr, Td } from "../utils/style-utils.js";

export default props => (
  <Container>
    <Date>
      <h3>With a little help from our friends</h3>
    </Date>
    <Table>
      <tbody>
        <Tr>
          <Th>Person</Th>
          <Th>Support</Th>
        </Tr>
        <Tr>
          <Td>All</Td>
          <Td>The marriage is outside so please bring a light Jacket</Td>
        </Tr>
        <Tr>
          <Td>Jeffrey</Td>
          <Td>Rings, Marriage Licence, Best Man</Td>
        </Tr>
        <Tr>
          <Td>Sabrina</Td>
          <Td>Flower Girl</Td>
        </Tr>
        <Tr>
          <Td>Debbie &amp; Alex</Td>
          <Td>
            Cake Pickup -{" "}
            <a href="https://goo.gl/maps/enVUd5gcNM82">Freed's Bakery</a>
          </Td>
        </Tr>
        <Tr>
          <Td>Deanna</Td>
          <Td>Table Decorations</Td>
        </Tr>
        <Tr>
          <Td>Cheryl &amp; Wendy</Td>
          <Td>
            Table Flowers, Name Tags, Buzz Buttons, Taquila &amp; Gift Box
          </Td>
        </Tr>
        <Tr>
          <Td>Ceremony Entry Order</Td>
          <Td>Cyril &amp; Joyce, Deanna, Sabrina, Anh &amp; Tina</Td>
        </Tr>
        <Tr>
          <Td>Ceremony Exit Order</Td>
          <Td>
            Tina &amp; Carlton, Jeff & Deanna, Anh &amp; Paulyne, Cyril &amp;
            Joyce
          </Td>
        </Tr>
        <Tr>
          <Td>Ceremony Exit Bubbles</Td>
          <Td>
            Sabrina, Eli, Nguyen - manual<br />Paulyne, Cyril - machine
          </Td>
        </Tr>
        <Tr>
          <Td>Ceremony Media</Td>
          <Td>
            Alex - Video Tina's Camera with 24mm<br />
            Bobby - Facebook Live<br />
            Corey - His Camera<br />
            Kevin - Video <br />
            Todd - Carlton's Camera with 85mm<br />
          </Td>
        </Tr>
      </tbody>
    </Table>
  </Container>
);
