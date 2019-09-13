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
  background-color: white;
`;

const MapButton = styled.div`
  background-color: transparent;
  border: solid black 2px;
  border-radius: 0;
  cursor: pointer !important;
  display: flex;
  height: 60%;
  align-items: center;
  justify-content: center;
  /* transition: border-color 0.4s ease 0s, background-color 0.4s ease 0s; */
  width: 25%;
`;

const MapButtonText = styled.span`
  /* transition: color 0.4s ease 0s; */
  color: black;
  /* font-family: Arial, Helvetica, sans-serif; */
  font-size: 18px;
  font-weight: 700;
`;

const Map = () => (
  <MapGrid>
    <div />
    <MapButton>
      <MapButtonText>Navigate Full Database</MapButtonText>
    </MapButton>
  </MapGrid>
);

export default Map;
