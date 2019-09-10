/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import GCFTFLogo from '../../dist/assets/images/logo.png';

const NavBarGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4.5fr 1.5fr 1fr 1fr 3fr;
  align-items: center;
  background-color: white;
  height: 75px;
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const Logo = styled.div`
  /* grid-area: logo; */
  place-self: center;
  background: no-repeat center/100% url(${GCFTFLogo});
  width: 75px;
  height: 75px;
`;

const NavTitle = styled.div`
  /* color: #3E522D; */
  height: 100%
  font-size: 20px;
  font-weight: 700;
  line-height: 75px;
  text-align: left;
  width: 100%;
`;

const NavLink = styled.div`
  /* color: #3E522D; */
  height: 100%
  width: 100%;
  text-align: center;
  line-height: 75px;
`;

const SearchBar = styled.div`
  height: 50%;
  place-self: center;
  width: 90%;
  /* position: relative; */
`;

const SearchBarInput = styled.input`
  height: 100%;
  width: 85%;
  border: 3px solid #3E522D;
  border-right: none;
  padding: 5px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
  &:focus {
    /* color: #76B945; */
    color: #3E522D;
  }
`;

const SearchBarButton = styled.button`
  width: 40px;
  height: 37.775px;
  border: 1px solid #3E522D;
  background: #3E522D;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 14px;
`;

const NavBar = () => (
  <NavBarGrid>
    <Logo />
    <NavTitle>
      Knowledge Database
    </NavTitle>
    <NavLink>Navigate Database</NavLink>
    <NavLink>About</NavLink>
    <NavLink>Contact</NavLink>
    <SearchBar>
      <SearchBarInput placeholder="Search" type="text" />
      <SearchBarButton>
        <i className="fa fa-search" />
      </SearchBarButton>
    </SearchBar>
  </NavBarGrid>
);

export default NavBar;
