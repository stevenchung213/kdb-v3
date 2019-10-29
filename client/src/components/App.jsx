/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import HamburgerMenu from './HamburgerMenu';
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
      showHamburgerMenu: false,
    };

    this.toggleHamburgerMenu = this.toggleHamburgerMenu.bind(this);
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const { showHamburgerMenu, showModal } = this.state;

    // history.goBack();
    if (!showHamburgerMenu) {
      document.body.style.overflow = showModal ? 'unset' : 'hidden';

      this.setState({
        showModal: !showModal,
      });
    }
  }

  toggleHamburgerMenu() {
    const { showHamburgerMenu, showModal } = this.state;

    // history.goBack();
    if (!showModal) {
      document.body.style.overflow = showHamburgerMenu ? 'unset' : 'hidden';

      this.setState({
        showHamburgerMenu: !showHamburgerMenu,
      });
    }
  }

  toggleLanguage(event) {
    this.setState({
      language: event.target.value,
    });
  }

  render() {
    const { language, showHamburgerMenu, showModal } = this.state;
    const { navBar, landingPage } = content[language];

    const modalBox = showModal ? <Modal toggleModal={this.toggleModal} /> : null;
    const hamburgerMenu = showHamburgerMenu ? <HamburgerMenu content={navBar} toggleHamburgerMenu={this.toggleHamburgerMenu} toggleLanguage={this.toggleLanguage} /> : null;

    return (
      <Switch>
        <Route exact path="/">
          <AppContainer>
            <NavBar
              content={navBar}
              toggleHamburgerMenu={this.toggleHamburgerMenu}
              toggleLanguage={this.toggleLanguage}
              toggleModal={this.toggleModal}
            />
            {modalBox}
            {hamburgerMenu}
            <Landing content={landingPage} />
          </AppContainer>
        </Route>
        {ROUTES.map(({ NAME, URL }) => (
          <Route exact path={URL} key={NAME}>
            <UnderConstruction
              endpoint={URL}
              navBarContent={navBar}
              footerContent={landingPage.footer}
              toggleHamburgerMenu={this.toggleHamburgerMenu}
              toggleLanguage={this.toggleLanguage}
              toggleModal={this.toggleModal}
              showHamburgerMenu={showHamburgerMenu}
              showModal={showModal}
            />
          </Route>
        ))}
      </Switch>
    );
  }
}

export default App;
