/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

const jurisdictions = [
  null,
  {
    NAME: 'Brazil',
    URL: '/brazil',
  },
  {
    NAME: 'Indonesia',
    URL: '/indonesia',
  },
  {
    NAME: 'Mexico',
    URL: '/mexico',
  },
  {
    NAME: 'Peru',
    URL: '/peru',
  },
  {
    NAME: 'Ivory Coast',
    URL: '/cotedivoire',
  },
  {
    NAME: 'Colombia',
    URL: '/colombia',
  },
  {
    NAME: 'Ecuador',
    URL: '/ecuador',
  },
  {
    NAME: 'Nigeria',
    URL: '/nigeria',
  },
  null,
  null,
  {
    NAME: 'Acre',
    URL: '/brazil/acre',
  },
  {
    NAME: 'Aceh',
    URL: '/indonesia/aceh',
  },
  {
    NAME: 'Campeche',
    URL: '/mexico/campeche',
  },
  {
    NAME: 'Amazonas',
    URL: '/peru/amazonas',
  },
  {
    NAME: 'Bélier',
    URL: '/cotedivoire/bélier',
  },
  {
    NAME: 'Caquetá',
    URL: '/columbia/caquetá',
  },
  {
    NAME: 'Pastaza',
    URL: '/pastaza',
  },
  {
    NAME: 'Cross River',
    URL: '/nigeria/crossriver',
  },
  null,
  null,
  {
    NAME: 'Amapá',
    URL: '/brazil/amapa',
  },
  {
    NAME: 'C. Kalimantan',
    URL: '/indonesia/centralkalimantan',
  },
  {
    NAME: 'Chiapas',
    URL: '/mexico/chiapas',
  },
  {
    NAME: 'Huánuco',
    URL: '/peru/huánuco',
  },
  {
    NAME: 'Cavally',
    URL: '/cotedivoire/cavally',
  },
  null,
  null,
  null,
  null,
  null,
  {
    NAME: 'Amazonas',
    URL: '/brazil/amazonas',
  },
  {
    NAME: 'E. Kalimantan',
    URL: '/indonesia/easternkalimantan',
  },
  {
    NAME: 'Jalisco',
    URL: '/mexico/jalisco',
  },
  {
    NAME: 'Loreto',
    URL: '/peru/loreto',
  },
  null,
  null,
  null,
  null,
  null,
  null,
  {
    NAME: 'Maranhão',
    URL: '/brazil/maranhão',
  },
  {
    NAME: 'N. Kalimantan',
    URL: '/indonesia/northkalimantan',
  },
  {
    NAME: 'Oaxaca',
    URL: '/mexico/oaxaca',
  },
  {
    NAME: 'Madre de Dios',
    URL: '/peru/madrededios',
  },
  null,
  null,
  null,
  null,
  null,
  null,
  {
    NAME: 'Mato Grosso',
    URL: '/brazil/matogrosso',
  },
  {
    NAME: 'W. Kalimantan',
    URL: '/indonesia/westkalimantan',
  },
  {
    NAME: 'Quintana Roo',
    URL: '/mexico/quintanaroo',
  },
  {
    NAME: 'Piura',
    URL: '/peru/piura',
  },
  null,
  null,
  null,
  null,
  null,
  null,
  {
    NAME: 'Pará',
    URL: '/brazil/pará',
  },
  {
    NAME: 'Papua',
    URL: '/indonesia/papua',
  },
  {
    NAME: 'Tabasco',
    URL: '/mexico/tabasco',
  },
  {
    NAME: 'San Martín',
    URL: '/peru/sanmartín',
  },
  null,
  null,
  null,
  null,
  null,
  null,
  {
    NAME: 'Rondônia',
    URL: '/brazil/rondônia',
  },
  {
    NAME: 'West Papua',
    URL: '/indonesia/westpapua',
  },
  {
    NAME: 'Yucatán',
    URL: '/mexico/yucatán',
  },
  {
    NAME: 'Ucayali',
    URL: '/peru/ucayali',
  },
  null,
  null,
  null,
  null,
  null,
  null,
  {
    NAME: 'Roraima',
    URL: '/brazil/roraima',
  },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  {
    NAME: 'Tocantins',
    URL: '/brazil/tocantins',
  },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

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
  position: absolute;
  top: 475;
  /* top: 75; */
  left: 0;
  bottom: 0;
  right: 0;
  height: 1790px;
  /* height: '2190px'; */
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

const ModalNation = styled.div`
  font-size: 18px;
  font-weight: 600;
  justify-self: left;
  margin-left: 30%;
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

const ModalState = styled.div`
  font-size: 13px;
  justify-self: left;
  margin-left: 30%;
  transition: color 0.4s ease 0, font-size 0.8s ease 0.5s, font-weight ease 0.4s 0;
  &:hover {
    color: #3E522D;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
  }
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
          {jurisdictions.map((jurisdiction, index) => {
            if (!jurisdiction) {
              return (<div key={index} />);
            }

            if (index < 11) {
              return <ModalNation key={index}>{jurisdiction.NAME}</ModalNation>
            }

            return <ModalState key={index}>{jurisdiction.NAME}</ModalState>
          })}
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
