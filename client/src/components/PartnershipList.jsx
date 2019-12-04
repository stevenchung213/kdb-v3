/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import PartnershipListItem from './PartnershipListItem';

const DUMMY_PARTNERSHIP_DATA = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 20 },
];

// TODO: Remove grid-column property (instantiate component within a Tile)
const PartnershipListStyled = styled.div`
  grid-column: 1/4;
  background-color: white;
  /* background-color: #e5e5e5; */
  height: 100%;
  overflow-y: scroll;
  width: 100%;
  padding: 30px 0;
`;

const PartnershipList = () => (
  <PartnershipListStyled>
    {DUMMY_PARTNERSHIP_DATA.map((partnership, index) => (
      <PartnershipListItem
        index={index}
        key={partnership.id}
        partnership={partnership}
        partnershipListLength={DUMMY_PARTNERSHIP_DATA.length}
      />
    ))}
  </PartnershipListStyled>
);

export default PartnershipList;
