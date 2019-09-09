/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Jumbotron from './Jumbotron';
import Map from './Map';
import SellingPoints from './SellingPoints';

const LandingGrid = styled.div`
  display: grid;
  padding-top: 75px;
  grid-template-rows: 8fr 8fr 4fr 2fr;
  /* grid-template-areas: "navbar navbar"
                       "jumbotron jumbotron"
                       "map map"
                       "sellingpoints sellingpoints"
                       "footer footer"; */
  height: 2000px;
`;

const Footer = styled.div`
  /* grid-area: footer; */
  background-color: royalblue;
`;

const Landing = () => (
  <LandingGrid>
    <Jumbotron />
    <Map />
    <SellingPoints>
      <h3>Selling Points</h3>
    </SellingPoints>
    <Footer>
      <h3>Footer</h3>
    </Footer>
  </LandingGrid>
);

export default Landing;
