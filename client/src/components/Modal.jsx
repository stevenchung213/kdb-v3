/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

const ModalBox = styled.div`
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
  border-top: 2px solid #3E522D;
  z-index: 100;
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

const MemberStatesGrid = styled.div`
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

const ModalFade = styled.div`
  position: "absolute",
  top: 475,
  /* top: 75, */
  left: 0,
  bottom: 0,
  right: 0,
  height: '1790px',
  /* height: '2190px', */
  background: "rgba(0, 0, 0, 0.6)",
  zIndex: 10,
`;

const Modal = ({ toggleModal }) => {

  // const back = e => {
  //   // e.stopPropagation();
  //   // history.goBack();
  //   alert('You clicked me!');
  // };

  return (
    <div>
      <ModalBox>
        <MemberStatesGrid>
          <div /><div>Brazil</div><div>Indonesia</div><div>Mexico</div><div>Peru</div><div>Ivory Coast</div><div>Colombia</div><div>Ecuador</div><div>Nigeria</div><div />
          <div /><div>Brazil</div><div>Indonesia</div><div>Mexico</div><div>Peru</div><div>Ivory Coast</div><div>Colombia</div><div>Ecuador</div><div>Nigeria</div><div />
          <div /><div>Brazil</div><div>Indonesia</div><div>Mexico</div><div>Peru</div><div>Ivory Coast</div><div />             <div />           <div />          <div />
          <div /><div>Brazil</div><div>Indonesia</div><div>Mexico</div><div>Peru</div><div />               <div />             <div />           <div />          <div />
          <div /><div>Brazil</div><div>Indonesia</div><div>Mexico</div><div>Peru</div><div />               <div />             <div />           <div />          <div />
          <div /><div>Brazil</div><div>Indonesia</div><div>Mexico</div><div>Peru</div><div />               <div />             <div />           <div />          <div />
          <div /><div>Brazil</div><div>Indonesia</div><div>Mexico</div><div>Peru</div><div />               <div />             <div />           <div />          <div />
          <div /><div>Brazil</div><div>Indonesia</div><div>Mexico</div><div>Peru</div><div />               <div />             <div />           <div />          <div />
          <div /><div>Brazil</div><div />             <div />          <div />        <div />               <div />             <div />           <div />          <div />
          <div /><div>Brazil</div><div />             <div />          <div />        <div />               <div />             <div />           <div />          <div />
        </MemberStatesGrid>
      </ModalBox>
      <ModalFade onClick={toggleModal} />
    </div>
  );
};

export default Modal;


















// class Modal extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showModal: false,
//     };
//   }
//
//   render() {
// const showModal = this.state.showModal ? <ModalBox /> : null;
//
//     return (
//       {showModal}
//     );
//   }
// }
