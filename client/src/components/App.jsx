/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Landing from './Landing';
import Modal from './Modal';
import NavBar from './NavBar';
import UnderConstruction from './UnderConstruction';

import content from '../../../multi-lingual';
import jurisdictions from '../const/jurisdictions';

const ROUTES = jurisdictions.filter(jurisdiction => jurisdiction);

const AppContainer = styled.div`
  height: 100%;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'en',
      showModal: false,
    };

    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const { showModal } = this.state;

    // history.goBack();
    this.setState({
      showModal: !showModal,
    });
  }

  toggleLanguage(event) {
    this.setState({
      language: event.target.value,
    });
  }

  render() {
    const { language, showModal } = this.state;
    const { navBar, landingPage } = content[language];

    const modalBox = showModal ? <Modal toggleModal={this.toggleModal} /> : null;

    return (
      <Switch>
        <Route exact path="/">
          <AppContainer>
            <NavBar
              content={navBar}
              toggleLanguage={this.toggleLanguage}
              toggleModal={this.toggleModal}
            />
            {modalBox}
            <Landing content={landingPage} />
          </AppContainer>
        </Route>
        {ROUTES.map(({ NAME, URL }) => (
          <Route exact path={URL} key={NAME}>
            <UnderConstruction
              endpoint={URL}
              navBarContent={navBar}
              footerContent={landingPage.footer}
              toggleLanguage={this.toggleLanguage}
              toggleModal={this.toggleModal}
              showModal={showModal}
            />
          </Route>
        ))}
      </Switch>
    );
  }
}

export default App;
