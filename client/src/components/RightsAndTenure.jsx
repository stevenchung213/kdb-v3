/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const RightsAndTenureStyled = styled.div`
  background-color: white;
  border-top: 3px solid #3E522D;
  height: calc(100% - 5% - 37px - 15px);
  overflow-y: scroll;
  width: 100%;
  margin: 15px 0;
`;

const RightsAndTenure = () => (
  <RightsAndTenureStyled>
    Rights and Tenure
  </RightsAndTenureStyled>
);

export default RightsAndTenure;
