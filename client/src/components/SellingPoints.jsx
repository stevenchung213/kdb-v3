/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const SellingPointsGrid = styled.div`
  display: grid;
  /* grid-area: sellingpoints; */
  grid-template-rows: 2fr 7fr;
  background-color: lightgreen;
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
  border: 2px solid black;
  height: 239px;
  width: 239px;
`;

const SellingPoints = () => (
  <SellingPointsGrid>
    <SellingPointsTitle>Selling Points</SellingPointsTitle>
    <SellingPointsMiniGrid>
      <Square />
      <Square />
      <Square />
    </SellingPointsMiniGrid>
  </SellingPointsGrid>
);

export default SellingPoints;
