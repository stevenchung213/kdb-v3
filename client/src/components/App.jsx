/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Landing from './Landing';
import NavBar from './NavBar';

import content from '../../../multi-lingual';

const AppContainer = styled.div`
  height: 100%;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'en',
    };
  }

  render() {
    const { language } = this.state;
    const { navBar, landingPage } = content[language];

    return (
      <AppContainer>
        <NavBar content={navBar} />
        <Landing content={landingPage} />
      </AppContainer>
    );
  }
}

export default App;
