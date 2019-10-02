/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import CIFORLogo from '../../dist/assets/logos/CIFOR.png';
import EIILogo from '../../dist/assets/logos/EII.png';
import GFWLogo from '../../dist/assets/logos/GFW.png';
import TCGLogo from '../../dist/assets/logos/TCG.png';

const FooterGrid = styled.div`
  display: grid;
  /* grid-area: footer; */
  grid-template-columns: 1fr 1fr;
  background-color: #3E522D;
  color: white;
`;

const FooterMiniGrid = styled.div`
  display: grid;
  grid-template-rows: 2fr 4fr 3fr;
  align-items: center;
`;

const AcknowledgementsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); */
  /* align-items: center; */
  justify-items: center;
  grid-gap: 15px;
  margin: 0 15px;
`;

const FooterTitle = styled.h3`
  margin: 0 15px;
`;

const FooterNavListGrid = styled.div`
  display: grid;
  /* grid-template-columns: 30px 4fr; */
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 15px;
  margin: 15px;
`;

const FooterNavListItemGrid = styled.div`
  display: grid;
  grid-template-columns: 30px auto 4fr;
  transition: color 0.4s ease 0.05s;
  &:hover {
    color: #582399;
    /* color: #b0cf44; */
    /* color: #c2e645; */
    /* color: #bfe639; */
    /* color: #b5db37; */
  }
`;

const FooterSocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto) 50%;
  grid-gap: 15px;
  margin: 0 15px 15px 15px;
`;

const Icon = styled.i`
  /* grid-area: logo; */
  place-self: center;
`;

const SocialIcon = styled.i`
  /* grid-area: logo; */
  place-self: start;
  transition: color 0.6s ease 0s;
  &:hover {
    /* color: #c2e645; */
    /* color: #bfe639; */
    color: #b5db37;
  }
`;

const FooterCopyrightText = styled.div`
  margin: 0 15px;
`;

const Logo = styled.div`
  /* grid-area: logo; */
  place-self: top;
  background: ${({ logo }) => `no-repeat center/100% url(${logo}`});
  /* border: 2px solid black; */
  width: 130px;
  height: 130px;
`;

const AcknowledgementsNote = styled.h5`
  margin: 0 15px;
`;

const Footer = () => (
  <FooterGrid>
    <FooterMiniGrid>
      <FooterTitle>More:</FooterTitle>
      <FooterNavListGrid>
        <FooterNavListItemGrid>
          <Icon className="fas fa-info" />
          <span className="menu-text"> About</span>
        </FooterNavListItemGrid>
        <FooterNavListItemGrid>
          <Icon className="far fa-file-pdf" />
          <span className="menu-text"> Sources</span>
        </FooterNavListItemGrid>
        <FooterNavListItemGrid>
          <Icon className="far fa-address-book" />
          <span className="menu-text"> Contacts</span>
        </FooterNavListItemGrid>
        <FooterNavListItemGrid>
          <Icon className="fas fa-home" />
          <span className="menu-text"> Back to Main Site</span>
        </FooterNavListItemGrid>
      </FooterNavListGrid>
      <div>
        <FooterSocialGrid>
          <SocialIcon className="fab fa-facebook-f fa-3x" />
          <SocialIcon className="fab fa-twitter fa-3x" />
          <SocialIcon className="fab fa-instagram fa-3x" />
          <SocialIcon className="fab fa-youtube fa-3x" />
        </FooterSocialGrid>
        <FooterCopyrightText>
          ©Governors' Climate and Forest Task Force, 2019
        </FooterCopyrightText>
      </div>
    </FooterMiniGrid>
    <FooterMiniGrid>
      <FooterTitle>Acknowledgements:</FooterTitle>
      <AcknowledgementsGrid>
        <Logo logo={GFWLogo} />
        <Logo logo={CIFORLogo} />
        <Logo logo={EIILogo} />
        <Logo logo={TCGLogo} />
      </AcknowledgementsGrid>
      <AcknowledgementsNote>
        A special thanks to our collaborators, who share an equal passion and
        self-assigned responsibility to battle the root causes and effects of
        climate change and deforestation. Your efforts and contributions to our
        collective cause is recognized, and appreciated.
      </AcknowledgementsNote>
    </FooterMiniGrid>
  </FooterGrid>
);

export default Footer;
