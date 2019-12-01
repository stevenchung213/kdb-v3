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
];

const LawListStyled = styled.ul`

`;

const LawList = () => (
  <LawListStyled>
    {DUMMY_LAW_DATA.map(law => (
      <LawListItem law={law} />
    ))}
  </LawListStyled>
);

export default LawList;
