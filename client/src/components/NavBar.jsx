/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const NavBarGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 1fr 1fr 1fr 2fr;
  align-items: center;
  background-color: rebeccapurple;
  height: 75px;
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const NavBar = () => (
  <NavBarGrid>
    <h3>Logo</h3>
    <h3>Knowledge Database</h3>
    <div />
    <h3>Nav 1</h3>
    <h3>Nav 2</h3>
    <h3>Nav 3</h3>
    <h3>Search Bar</h3>
  </NavBarGrid>
);

export default NavBar;
