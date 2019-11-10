/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

const NJPageGrid = styled.div`
  display: grid;
  padding-top: 75px;
  grid-template-rows: 700px 370px;
  height: 100%;
`;

const NJPage = () => (
  <NJPageGrid>
    <div>Hello Nation/Jurisidiction page!</div>
  </NJPageGrid>
);

export default NJPage;
