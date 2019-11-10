/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import NJHeader from './NJHeader';
import NJNav from './NJNav';
import NJBody from './NJBody';

// One fragment is ???!
const NJPageGrid = styled.div`
  display: grid;
  padding-top: 75px;
  grid-template-rows: 400px 50px auto;
  /* grid-template-columns: auto; */
  /* grid-template-areas: "nj-header nj-header"
                          "nj-nav nj-nav"
                          "nj-body nj-body"*/
  height: 1250px;
`;

const NJPage = () => (
  <NJPageGrid>
    <NJHeader>Hello Nation/Jurisidiction page!</NJHeader>
    <NJNav>Hello Nation/Jurisidiction page!</NJNav>
    <NJBody>Hello Nation/Jurisidiction page!</NJBody>
  </NJPageGrid>
);

export default NJPage;
