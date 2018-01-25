import React from "react";
import styled from "styled-components";

const basedir = process.env.PUBLIC_URL;

const A = styled.a`
  font-family: Arial;
  font-weight: bold;
  color: darkgoldenrod;
  margin: 5px;
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline overline;
    color: green;
  }
`;
export default ({ link, active }) => {
  return (
    <div>
      <Link to={link === "home" ? `${basedir}` : `${basedir}${link}`}>
        {link.slice(0, 1).toUpperCase() + link.slice(1)}
      </Link>
    </div>
  );
};
