/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import LawList from './LawList';
import Tabs from './Tabs';

const PROGRAMS_TAB_LABELS = [
  'Overview',
  'Laws and Regulations',
  'Institutional Frameworks',
];

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 37px 1000px;

  height: 100%;
  width: 100%;
`;

class Programs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Overview',
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tab) {
    this.setState({
      activeTab: tab,
    });
  }

  render() {
    return (
      <ProgramsGrid>
        <Tabs
          activeTab={this.state.activeTab}
          handleTabClick={this.handleTabClick}
          tabLabels={PROGRAMS_TAB_LABELS}
        />
        <LawList />
      </ProgramsGrid>
    );
  }
}

export default Programs;
