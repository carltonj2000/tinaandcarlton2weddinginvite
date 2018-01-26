import React from "react";
import styled from "styled-components";

const flamingo = require("../images/flamingo.png");
const mimis = require("../images/mimis.png");

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: white;
`;

const RowA = styled.div`
  display: flex;
  background: aqua;
`;

const Warning = styled.p`
  padding-left: 10px;
  padding-right: 10px;
  color: green;
  font-weight: bold;
  text-align: center;
`;

const RowB = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

const H4 = styled.h4`
  color: blue;
`;
const Img = styled.img`
  width: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  frameborder: 0;
  border: 0;
`;

const Addr = styled.a`
  margin-bottom: 15px;
`;

const Coln = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => (
  <Container>
    <RowA>
      <Warning>
        Please be in the vicinity of the chapel at 11:30 AM for the noon
        wedding. The chapel keeps a strict schedule and the ceremony is only 30
        minutes long so if you arrive late you can miss the wedding ceremony.
      </Warning>
    </RowA>
    <RowB>
      <Coln>
        <h3>
          <a href="https://goo.gl/maps/s7jje8eYd2p">Flamingo Chapel - Noon</a>
        </h3>
        <Addr href="https://goo.gl/maps/s7jje8eYd2p">
          3555 S Las Vegas Blvd, Las Vegas, NV 89109
        </Addr>
        <Addr href="https://goo.gl/maps/ir2NTFv9NmM2">
          Flamingo Self Parking Location ($7.00 &lt; 4 hrs)
        </Addr>
        <Addr href="https://goo.gl/maps/ir2NTFv9NmM2">
          Flamingo Valet Parking Location ($13.00 &lt; 4 hrs)
        </Addr>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25788.406015020326!2d-115.1916576387695!3d36.104437837746126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c43bca8fd755%3A0x645b9d40c4e2ea75!2sFlamingo+Las+Vegas!5e0!3m2!1sen!2sus!4v1513910062482" />
        <H4>Parking And Walking</H4>
        <Img src={flamingo} />
      </Coln>
      <Coln>
        <h3>
          <a href="https://goo.gl/maps/j1Akj2Si4St">
            Mimi & Coco Bistro - 4 PM
          </a>
        </h3>
        <Addr href="https://goo.gl/maps/s7jje8eYd2p">
          40 Costa Di Lago, Henderson, NV 89011
        </Addr>
        <Addr href="https://goo.gl/maps/NpVgNSSyoAs">
          Lake Las Vegas Self Parking (Free)
        </Addr>
        <Addr href="https://goo.gl/maps/ddmQiwbPxFL2">
          Lake Las Vegas Mimi's Drop Of Area
        </Addr>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1139.7223276861898!2d-114.93109144199455!3d36.1027125108925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d7931e9dd00f%3A0x6b2ae084b961c74c!2sMimi+%26+Coco+Bistro!5e0!3m2!1sen!2sus!4v1513910930321" />
        <H4>Parking And Walking</H4>
        <Img src={mimis} />
      </Coln>
    </RowB>
  </Container>
);
