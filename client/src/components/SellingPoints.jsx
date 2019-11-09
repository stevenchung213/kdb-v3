/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const SellingPointsGrid = styled.div`
  display: grid;
  /* grid-area: sellingpoints; */
  grid-template-rows: 1fr 8fr;
  /* background-color: #eeeeee; */
  /* background-color: #C3D2DA; */
  background-color: #fff;
  background-image: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
`;

const SellingPointsMiniGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); */
  /* align-items: center; */
  /* justify-items: center; */
  /* grid-gap: 30px; */
  @media (max-width: 765px) {
    grid-template-columns: 1fr;
    grid-template-rows: 605px 1fr;
  }
`;

const SellingPointsTitle = styled.h1`
  align-self: end;
  justify-self: center;
  margin: 0;

  @media (max-width: 765px) {
    font-size: 24px;
  }

  @media (max-width: 525px) {
    font-size: 20px;
  }
`;

const Rectangle = styled.div`
  place-self: center;
  height: 515px;
  width: 290px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08);

  @media (max-width: 1025px) {
    height: 50vw;
    width: 85%;
  }

  @media (max-width: 765px) {
    height: 515px;
    width: 290px;
    display: ${({ hideBelow765 }) => (hideBelow765 ? 'none' : 'initial')}
  }
`;

const Dots = styled.ol`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: center;

  @media (min-width: 766px) {
    display: none;
  }
`;

const Dot = styled.li`
  background-color: ${({ color }) => color}
  border-radius: 50%;
  display: inline-block;
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin: 0 4px;

  @media (min-width: 766px) {
    display: none;
  }
`;

const SellingPoints = ({ content }) => {
  const { TITLE, TEXT_ONE, TEXT_TWO, TEXT_THREE } = content;

  return (
    <SellingPointsGrid>
      <SellingPointsTitle>{TITLE}</SellingPointsTitle>
      <SellingPointsMiniGrid>
        <Rectangle />
        <Dots>
          <Dot color="#b5db37" />
          <Dot color="#3E522D" />
          <Dot color="#3E522D" />
        </Dots>
        <Rectangle hideBelow765 />
        <Rectangle hideBelow765 />
      </SellingPointsMiniGrid>
    </SellingPointsGrid>
  );
};

export default SellingPoints;
