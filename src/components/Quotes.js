import React from "react";
import styled from "styled-components";

import { media } from "../utils/style-utils";

const Container = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background: white;
  margin-top: 20px;
`;

const P1 = styled.p`
  font-size: 32px;
  text-align: right;
  color: coral;
  ${media.tablet`text-align: center`};
`;

const Pn = styled.div`
  line-height: 24px;
  text-align: justify;
  ${media.tablet`line-height: 16px`};
`;

export default () => (
  <Container>
    <div>
      <P1>Love is like the wind, you can't see it, but you can feel it.</P1>
    </div>
    <div>
      <Pn>
        Love is patient, love is kind. It does not envy, it does not boast, it
        is not proud. It does not dishonor others, it is not self-seeking, it is
        not easily angered, it keeps no record of wrongs. Love does not delight
        in evil but rejoices with the truth. It always protects, always trusts,
        always hopes, always perseveres.
      </Pn>
    </div>
    <div>
      <Pn>
        Love is the answer to everything. It's the only reason to do anything.
        If you don't write stories you love, you'll never make it. If you don't
        write stories that other people love, you'll never make it.
      </Pn>
    </div>
  </Container>
);
