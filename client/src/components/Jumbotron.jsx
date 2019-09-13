/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import JumbotronBackgroundImage from '../../dist/assets/images/Mau-Forest-Kenya-copy.png';

const JumbotronGrid = styled.div`
  display: grid;
  /* grid-area: jumbotron; */
  grid-template-columns: 1fr 1fr;
  background-image: url(${JumbotronBackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top left;
  background-attachment: fixed;
  height: 700.8px;
`;

const JumbotronMiniGrid = styled.div`
  display: grid;
  grid-template-columns: 11fr 9fr;
  grid-template-rows: 1fr 2fr 3fr 1fr;
  background-color: rgba(255, 255, 255, 0.75);
  align-items: center;
  padding: 10% 0 10% 0;
`;

const JumbotronBrandText = styled.div`
  height: 100%;
  font-size: 20px;
  font-weight: 700;
  /* line-height: 75px; */
  letter-spacing: 3px;
  padding-left: 30px;
  text-align: left;
  width: 100%;
`;

const JumbotronTitle = styled.div`
  height: 100%
  font-size: 60px;
  font-weight: 900;
  /* line-height: 75px; */
  letter-spacing: 3px;
  padding-left: 30px;
  text-align: left;
  width: 100%;
`;

const JumbotronDescription = styled.div`
  height: 100%
  font-size: 16px;
  font-weight: normal;
  /* line-height: 75px; */
  letter-spacing: 1px;
  line-height: 30px;
  padding-left: 30px;
  text-align: left;
  width: 100%;
`;

const JumbotronButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 30px 5fr 1fr 5fr;
  place-items: center;
  height: 100%;
  width: 100%;
`;

const JumbotronButton = styled.div`
  background-color: transparent;
  border: solid black 2px;
  border-radius: 0;
  cursor: pointer !important;
  display: flex;
  height: 60%;
  align-items: center;
  justify-content: center;
  /* transition: border-color 0.4s ease 0s, background-color 0.4s ease 0s; */
  width: 100%;
`;

const JumbotronButtonText = styled.span`
  /* transition: color 0.4s ease 0s; */
  color: black;
  /* font-family: Arial, Helvetica, sans-serif; */
  font-size: 18px;
  font-weight: 700;
`;

const Jumbotron = () => (
  <JumbotronGrid>
    <div />
    <JumbotronMiniGrid>
      <JumbotronBrandText>
        GOVERNORS' CLIMATE &
        <br />
        FOREST (GCF) TASK FORCE
      </JumbotronBrandText>
      <div />
      <JumbotronTitle>
        Knowledge
        <br />
        Database
      </JumbotronTitle>
      <div />
      <JumbotronDescription>
        An open platform integrating comprehensive information from GCF Task
        Force member states and provinces reporting current status and trends
        regarding land use, deforestation, frameworks, policies, and
        partnerships.
      </JumbotronDescription>
      <div />
      <JumbotronButtonGrid>
        <div />
        <JumbotronButton>
          <JumbotronButtonText>Navigate DB</JumbotronButtonText>
        </JumbotronButton>
        <div />
        <JumbotronButton>
          <JumbotronButtonText>Global Summary</JumbotronButtonText>
        </JumbotronButton>
      </JumbotronButtonGrid>
    </JumbotronMiniGrid>
  </JumbotronGrid>
);

export default Jumbotron;
