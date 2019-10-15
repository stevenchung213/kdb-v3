/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Landing from './Landing';
import LanguageSelect from './LanguageSelect';
import Modal from './Modal';
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
      <AppContainer>
        <LanguageSelect toggleLanguage={this.toggleLanguage} />
        <NavBar content={navBar} toggleModal={this.toggleModal} />
        {modalBox}
        <Landing content={landingPage} />
      </AppContainer>
    );
  }
}

export default App;
