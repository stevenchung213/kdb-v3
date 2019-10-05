/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import GCFTFLogo from '../../dist/assets/logos/GCFTF.png';

const NavBarGrid = styled.div`
  display: grid;
  /* grid-template-columns: 1fr minmax(250px, 4.5fr) minmax(143px, 1.5fr) 1fr 1fr minmax(350px, 3fr); */
  grid-template-columns: 1fr minmax(210px, 4.5fr) minmax(215px, 1.5fr) minmax(auto, auto) auto minmax(280px, 3fr);
  grid-gap: 10px;
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
  margin-left: 10px;
`;

const NavTitle = styled.div`
  /* color: #3E522D; */
  /* color: #692bb5 */
  height: 100%
  font-size: 20px;
  font-weight: 700;
  line-height: 75px;
  text-align: left;
  width: 100%;
  transition: color 0.4s ease 0.05s;
  &:hover {
    color: #582399;
`;

const NavLink = styled.div`
  /* color: #3E522D; */
  font-weight: 600;
  height: 100%
  width: 100%;
  text-align: right;
  padding: 0 5px;
  line-height: 75px;
  transition: color 0.4s ease 0.05s;
  &:hover {
    color: #582399;
    /* color: #b0cf44; */
    /* color: #c2e645; */
    /* color: #bfe639; */
    /* color: #b5db37; */
  }
`;

const SearchBar = styled.div`
  height: 50%;
  place-self: center;
  width: 90%;
  min-width: 252px;
  /* border: 1px dashed red; */
  /* position: relative; */
`;

const SearchBarInput = styled.input`
  height: 100%;
  width: 84%;
  min-width: 208px;
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

const NavBar = ({ content }) => {
  const { NAVIGATE_DATABASE, ABOUT, CONTACT, SEARCH_PLACEHOLDER } = content;

  return (
    <NavBarGrid>
      <Logo />
      <NavTitle>
        Knowledge Database
      </NavTitle>
      <NavLink>{NAVIGATE_DATABASE}</NavLink>
      <NavLink>{ABOUT}</NavLink>
      <NavLink>{CONTACT}</NavLink>
      <SearchBar>
        <SearchBarInput placeholder={SEARCH_PLACEHOLDER} type="text" />
        <SearchBarButton>
          <i className="fa fa-search" />
        </SearchBarButton>
      </SearchBar>
    </NavBarGrid>
  );
};

export default NavBar;
