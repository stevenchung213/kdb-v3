/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const SellingPointsGrid = styled.div`
  display: grid;
  /* grid-area: sellingpoints; */
  grid-template-rows: 2fr 7fr;
  /* background-color: #eeeeee; */
  /* background-color: #C3D2DA; */
  background-color: #fff;
  background-image: linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
`;

const SellingPointsMiniGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); */
  /* align-items: center; */
  justify-items: center;
  grid-gap: 30px;
`;

const SellingPointsTitle = styled.h1`
  place-self: center;
`;

const Square = styled.div`
  place-self: center;
  height: 239px;
  width: 239px;
  background-color: white;
  border-radius:5px;
  box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08);
`;

const SellingPoints = ({ content }) => {
  const { TITLE, TEXT_ONE, TEXT_TWO, TEXT_THREE } = content;

  return (
    <SellingPointsGrid>
      <SellingPointsTitle>{TITLE}</SellingPointsTitle>
      <SellingPointsMiniGrid>
        <Square />
        <Square />
        <Square />
      </SellingPointsMiniGrid>
    </SellingPointsGrid>
  );
};

export default SellingPoints;
