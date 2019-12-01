/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const LawListItemStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  background-color: tomato;

  font-size: 16px;
  font-weight: 500;
  height: 45px;
  margin: 15px auto;
  width: 90%;
`;

const LawListItem = () => (
  <LawListItemStyled>
    Hello World (of Law)!
  </LawListItemStyled>
);

export default LawListItem;
