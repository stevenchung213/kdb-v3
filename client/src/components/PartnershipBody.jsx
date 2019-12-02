/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import GCFTFLogo from '../../dist/assets/logos/GCFTF.png';

const PartnershipBodyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10px;

  background-color: #e5e5e5;
  min-height: ${({ isOpen }) => isOpen && '250px'};
  padding: ${({ isOpen }) => isOpen && '2.73% 3.63% 2.72% 2.18%'};
  width: 100%;
`;

const PartnershipBodyMiniGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: repeat(5, 1fr);
  grid-row-gap: 10px;
  align-items: center;

  height: 100%;
  padding-right: 7.26%;
  width: 100%;
`;

// const PartnershipBodyLogo = styled.div`
//   grid-column: 2/3;
//   grid-row: 1/4;
//   justify-self: right;
//
//   background: ${({ logo }) => `no-repeat center/100% url(${logo})`};
//   height: 112.5px;
//   width: 112.5px;
// `;

const PartnershipLabel = styled.span`
  font-size: 16px;
`;

const PartnershipText = styled.span`
  justify-self: center;

  font-size: 16px;
`;

const PartnershipDescription = styled.div`
  border-left: 1px solid
  font-size: 14px;
  padding-left: 7.26%;
`;

const PartnershipTagList = styled.div`
  display: flex;
  align-items: center;

  /* -webkit-overflow-scrolling: touch;   For Momentum Scroll on Mobile */

  /* background-color: white; */
  border-radius: 0 0 5px 5px;
  /* direction: rtl; */
  height: 100%;
  overflow-x: auto;
  padding-right: 2.5%;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const PartnershipTag = styled.div`
  flex: 0 0 auto;

  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  height: 70%;
  line-height: 31px; /* 0.70 (height) times grid row height (48px)...plus a little? */
  margin: 0 10px;
  padding: 0 10px;
  text-align: center;
`;

const PartnershipBody = ({ isOpen }) => {
  // TODO: Conditional Here! If summary is an array, dynamically render list.
  //                         Else, render as paragraph tag.
  if (!isOpen) {
    return (
      <PartnershipBodyGrid isOpen={isOpen} />
    );
  }
  return (
    <PartnershipBodyGrid isOpen={isOpen}>
      <PartnershipBodyMiniGrid>
        <PartnershipLabel>Initiative Type:</PartnershipLabel>
        <PartnershipTag>Protected Areas</PartnershipTag>
        <PartnershipLabel>Funding Raised:</PartnershipLabel>
        <PartnershipText>$34,456,732</PartnershipText>
        <PartnershipLabel>Funding Source:</PartnershipLabel>
        <PartnershipText>European Union</PartnershipText>
        <PartnershipLabel>Partners:</PartnershipLabel>
        <PartnershipTagList>
          <PartnershipTag>IBAM</PartnershipTag>
          <PartnershipTag>INPE</PartnershipTag>
          <PartnershipTag>INPE</PartnershipTag>
          <PartnershipTag>INPE</PartnershipTag>
          <PartnershipTag>INPE</PartnershipTag>
        </PartnershipTagList>
        <PartnershipLabel>Status:</PartnershipLabel>
        <div>Something Else!</div>
      </PartnershipBodyMiniGrid>
      <PartnershipDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in mauris quam. In semper dolor vel nunc porttitor ornare. Maecenas hendrerit urna euismod, sodales orci eget, pulvinar risus. Proin lacinia tincidunt ante, quis feugiat ipsum accumsan id. Sed facilisis urna nisl, in ultricies turpis fermentum eget. Nullam turpis libero, venenatis eu urna eget, dapibus varius mauris. Integer vehicula porttitor vestibulum. Nunc bibendum tortor id egestas commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam pharetra eleifend felis. Praesent commodo risus nec aliquet maximus. Mauris bibendum volutpat dui. Pellentesque at cursus arcu. Pellentesque consequat aliquet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </PartnershipDescription>
    </PartnershipBodyGrid>
  );
};

export default PartnershipBody;
