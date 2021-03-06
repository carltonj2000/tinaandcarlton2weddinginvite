import React from "react";
import styled from "styled-components";

const Photos = styled.div`
  background: white;
  display: grid;
  width: 100%;
  grid-gap: 3px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Img = styled.img`
  width: 100%;
`;

export default ({ photoModalOpen, images }) => {
  return (
    <Photos>
      {images.map((img, idx) => (
        <Img
          key={`${idx}`}
          src={img.name}
          alt={img.description}
          onClick={() => photoModalOpen(idx)}
        />
      ))}
    </Photos>
  );
};
