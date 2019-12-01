/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import LawListItem from './LawListItem';

const DUMMY_LAW_DATA = [
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
const LawListStyled = styled.div`
  grid-column: 1/4;
  background-color: white;
  height: 100%;
  overflow-y: scroll;
  width: 100%;
  padding: 30px 0;
`;

const LawList = () => (
  <LawListStyled>
    {DUMMY_LAW_DATA.map(law => (
      <LawListItem key={law.id} law={law} />
    ))}
  </LawListStyled>
);

export default LawList;
