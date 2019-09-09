/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

const JumbotronGrid = styled.div`
  display: grid;
  /* grid-area: jumbotron; */
  grid-template-columns: 1fr 1fr;
  background-color: skyblue;
`;

const Jumbotron = () => (
  <JumbotronGrid>
    <h3>Jumbotron Left</h3>
    <h3>Jumbotron Right</h3>
  </JumbotronGrid>
);

const LandingGrid = styled.div`
  display: grid;
  padding-top: 75px;
  grid-template-rows: 8fr 8fr 4fr 2fr;
  /* grid-template-areas: "navbar navbar"
                       "jumbotron jumbotron"
                       "map map"
                       "sellingpoints sellingpoints"
                       "footer footer"; */
  height: 1925px;
`;

const Map = styled.div`
  /* grid-area: map; */
  background-color: tomato;
`;

const SellingPoints = styled.div`
  /* grid-area: sellingpoints; */
  background-color: lightgreen;
`;

const Footer = styled.div`
  /* grid-area: footer; */
  background-color: royalblue;
`;

const Landing = () => (
  <LandingGrid>
    <Jumbotron />
    <Map>
      <h3>Map</h3>
    </Map>
    <SellingPoints>
      <h3>Selling Points</h3>
    </SellingPoints>
    <Footer>
      <h3>Footer</h3>
    </Footer>
  </LandingGrid>
);

export default Landing;
