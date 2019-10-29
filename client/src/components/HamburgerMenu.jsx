/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import jurisdictions from '../const/jurisdictions';

const HamburgerMenuBox = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  /* width: calc(100% - 310px); */
  height: 400px;
  margin-top: 75px;
  /* margin-top: 150px; */
  /* left: 130px; */
  /* right: 180px; */
  background-color: white;
  /* border-top: 2px solid #3E522D; */
  z-index: 999;
  transition: border 0.6s ease 0s, background-color 0.6s ease 0s, color 0.6s ease 0s;
  /* box-shadow: 0px 6px 6px rgba(0,0,0,0.8); */
`;

// &:hover {
//   border: solid #582399 2px;
//   background-color: #582399;
//   /* border: solid #7442b3 2px;
//   background-color: #7442b3; */
//   /* border: solid #693ba3 2px;
//   background-color: #693ba3; */
//   /* color: #582399; */
//   color: white;
// }

const HamburgerMenuGrid = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 4fr; */
  grid-template-columns: 0.5fr repeat(8, 1fr) 0.5fr;
  grid-template-rows: 2fr repeat(10, 1fr);
  /* grid-template-areas: ". x x x x x x x x ."
                         ". x x x x x x x x ."
                         ". x x x x x . . . ."
                         ". x x x x . . . . ."
                         ". x x x x . . . . ."
                         ". x x x x . . . . ."
                         ". x x x x . . . . ."
                         ". x x x x . . . . ."
                         ". x . . . . . . . ."
                         ". x . . . . . . . ." */
  place-items: center;
  width: 100%;
  height: 100%;
`;

const HamburgerMenuFade = styled.div`
  position: absolute;
  top: 475px;
  /* top: 75; */
  left: 0;
  bottom: 0;
  right: 0;
  /* height: 1790px; */
  height: 2062px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 998;
`;

const ModalNationLink = styled(Link)`
  color: black;
  font-size: 18px;
  font-weight: 600;
  justify-self: left;
  margin-left: 30%;
  text-decoration: none;
  transition: color 0.1s ease 0, font-size 0.1s ease 0, text-shadow 0.1s ease 0;
  &:hover {
    color: #3E522D;
    cursor: pointer;
    font-size: 19px;


    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }
`;

const ModalStateLink = styled(Link)`
  color: black;
  font-size: 13px;
  justify-self: left;
  margin-left: 30%;
  text-decoration: none;
  transition: color 0.4s ease 0, font-size 0.8s ease 0.5s, font-weight ease 0.4s 0;
  &:hover {
    color: #3E522D;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
  }
`;

const HamburgerMenu = ({ toggleHamburgerMenu }) => {

  // const back = e => {
  //   // e.stopPropagation();
  //   // history.goBack();
  //   alert('You clicked me!');
  // };

  return (
    <div>
      <HamburgerMenuBox>
        <HamburgerMenuGrid>

        </HamburgerMenuGrid>
      </HamburgerMenuBox>
      <HamburgerMenuFade onClick={toggleHamburgerMenu} />
    </div>
  );
};

export default HamburgerMenu;

// class HamburgerMenu extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showModal: false,
//     };
//   }
//
//   render() {
// const showModal = this.state.showModal ? <HamburgerMenuBox /> : null;
//
//     return (
//       {showModal}
//     );
//   }
// }
