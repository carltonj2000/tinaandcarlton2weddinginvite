import styled, { css } from "styled-components";

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 600,
  phone: 450
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;
export const Date = styled.div`
  display: flex;
  background: aqua;
  justify-content center;
`;
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-bottom: 1px solid gray;
`;
export const Th = styled.th`
  border-bottom: 1px solid gray;
  text-align: left;
`;
export const Td = styled.td`
  border-bottom: 1px solid gray;
  padding-top: 5px;
`;
export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: aqua;
  }
`;
