/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const NJBodyStyled = styled.div`
  background-color: #e5e5e5;
  /* background-color: #fff;
  background-image: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%); */
  height: 100%;
  width: 100;
`;

const NJBody = () => {
  let { pageId } = useParams();
  if (!pageId) {
    pageId = 'No ID!';
  }

  return (
    <NJBodyStyled>{`Hello Nation/Jurisidiction ${pageId} page!`}</NJBodyStyled>
  );
}

export default NJBody;
