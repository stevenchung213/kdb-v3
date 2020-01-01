/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import NJLand from './NJLand';
import NJVegetation from './NJVegetation';
import NJCO2Emissions from './NJCO2Emissions';
import NJDeforestation from './NJDeforestation';
import Tile from './Tile';

const ForestAndLandUseGrid = styled.div`
  display: grid;
  grid-gap: 2%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 800px 800px 800px 400px;

  height: 100%;
`;

const NJForestAndLandUsePage = ({ nationName, jurisdictionName }) => (
  <ForestAndLandUseGrid>
    <Tile gridColumn="1/3" gridRow="1/2">
      <NJLand />
    </Tile>
    <Tile gridColumn="2/4" gridRow="2/3">
      <NJCO2Emissions />
    </Tile>
    <Tile gridColumn="1/2" gridRow="2/3">
      <NJVegetation />
    </Tile>
    <Tile gridColumn="1/4" gridRow="3/4">
      <NJDeforestation />
    </Tile>
  </ForestAndLandUseGrid>
);

export default NJForestAndLandUsePage;
