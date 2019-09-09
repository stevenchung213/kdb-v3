/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Landing from './Landing';
import NavBar from './NavBar';

const AppContainer = styled.div`
  height: 100%;
`;

const App = () => (
  <AppContainer>
    <NavBar />
    <Landing />
  </AppContainer>
);

export default App;
