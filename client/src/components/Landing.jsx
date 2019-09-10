/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './Footer';
import Jumbotron from './Jumbotron';
import Map from './Map';
import SellingPoints from './SellingPoints';

const LandingGrid = styled.div`
  display: grid;
  padding-top: 75px;
  grid-template-rows: 8fr 8fr 5fr 4fr;
  /* grid-template-areas: "navbar navbar"
                       "jumbotron jumbotron"
                       "map map"
                       "sellingpoints sellingpoints"
                       "footer footer"; */
  height: 2265px;
`;

const Landing = () => (
  <LandingGrid>
    <Jumbotron />
    <Map />
    <SellingPoints />
    <Footer />
  </LandingGrid>
);

export default Landing;
