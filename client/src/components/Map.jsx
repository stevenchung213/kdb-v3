/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const MapGrid = styled.div`
  display: grid;
  /* grid-area: map; */
  grid-template-rows: 17fr 3fr;
  align-items: center;
  justify-items: center;
  background-color: tomato;
`;

const Map = () => (
  <MapGrid>
    <h1>Map</h1>
    <button>Navigate Full Database</button>
  </MapGrid>
);

export default Map;
