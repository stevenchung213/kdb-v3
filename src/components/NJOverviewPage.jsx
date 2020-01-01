/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import NJContacts from './NJContacts';
import Tile from './Tile';

const OverviewGrid = styled.div`
  display: grid;
  grid-gap: 2%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 800px 800px 1000px 400px;
  grid-template-areas:
    '. . . .'
    '. . . .'
    '. . . .'
    'contacts contacts contacts contacts';

  height: 100%;

  @media (max-width: 765px) {
    grid-template-areas:
      '. . . .'
      '. . . .'
      'contacts contacts . .'
      '. . . .';
  }

  @media (max-width: 460px) {
    grid-template-areas:
      '. . . .'
      '. . . .'
      'contacts contacts contacts contacts'
      '. . . .';
  }
`;

const NJOverviewPage = ({ nationName, jurisdictionName }) => (
  <OverviewGrid>
    <Tile gridArea="contacts">
      <NJContacts jurisdiction={jurisdictionName} />
    </Tile>
  </OverviewGrid>
);

export default NJOverviewPage;
