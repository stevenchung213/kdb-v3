/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const JumbotronGrid = styled.div`
  display: grid;
  /* grid-area: jumbotron; */
  grid-template-columns: 1fr 1fr;
  background-color: skyblue;
`;

const JumbotronMiniGrid = styled.div`
  display: grid;
  grid-template-columns: 11fr 9fr;
  grid-template-rows: 1fr 2fr 3fr 1fr;
  background-color: rgba(255, 255, 255, 0.20);
  align-items: center;
  padding: 10% 0;
`;

const Jumbotron = () => (
  <JumbotronGrid>
    <div />
    <JumbotronMiniGrid>
      <div>Governor's Climate and Forest (GCF) Task Force</div>
      <div />
      <div>Knowledge Database</div>
      <div />
      <div>An open platform integrating comprehensive information from GCF Task Force member states and provinces reporting current status and trends regarding land use, deforestation, frameworks, policies, and partnerships.</div>
      <div />
      <div>
        <button>Global Summary</button>
        <button>Navigate DB</button>
      </div>
      <div />
    </JumbotronMiniGrid>
  </JumbotronGrid>
);

export default Jumbotron;
