/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const FooterGrid = styled.div`
  display: grid;
  /* grid-area: footer; */
  grid-template-columns: 1fr 1fr;
  background-color: royalblue;
`;

const FooterMiniGrid = styled.div`
  display: grid;
  grid-template-rows: 2fr 4fr 3fr;
  align-items: center;
`;

const AcknowledgementsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); */
  /* align-items: center; */
  justify-items: center;
  grid-gap: 30px;
`;

const Square = styled.div`
  place-self: top;
  border: 2px solid black;
  height: 130px;
  width: 130px;
`;

const Footer = () => (
  <FooterGrid>
    <FooterMiniGrid>
      <h3>More:</h3>
      <ul>
        <li>
          <i className="fas fa-info" />
          <span className="menu-text"> About</span>
        </li>
        <li>
          <i className="far fa-file-pdf" />
          <span className="menu-text"> Sources</span>
        </li>
        <li>
          <i className="far fa-address-book" />
          <span className="menu-text"> Contacts</span>
        </li>
        <li>
          <i className="fas fa-home" />
          <span className="menu-text"> Back to Main Site</span>
        </li>
      </ul>
      <div>
        <div>
          <i className="fab fa-facebook-f fa-3x" />
          <i className="fab fa-twitter fa-3x" />
          <i className="fab fa-instagram fa-3x" />
          <i className="fab fa-youtube fa-3x" />
        </div>
        <div>©Governors' Climate and Forest Task Force, 2019</div>
      </div>
    </FooterMiniGrid>
    <FooterMiniGrid>
      <h3>Acknowledgements:</h3>
      <AcknowledgementsGrid>
        <Square />
        <Square />
        <Square />
      </AcknowledgementsGrid>
      <h5>
        A special thanks to our collaborators, who share an equal passion and
        self-assigned responsibility to battle the root causes and effects of
        climate change and deforestation. Your efforts and contributions to our
        collective cause is recognized, and appreciated.
      </h5>
    </FooterMiniGrid>
  </FooterGrid>
);

export default Footer;
