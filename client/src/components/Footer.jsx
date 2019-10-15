/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import LanguageSelect from './LanguageSelect';

import CIFORLogo from '../../dist/assets/logos/CIFOR.png';
import EIILogo from '../../dist/assets/logos/EII.png';
import GFWLogo from '../../dist/assets/logos/GFW.png';
import TCGLogo from '../../dist/assets/logos/TCG.png';

const FACEBOOK_URL = 'https://www.facebook.com/gcf.taskforce';
const CIFOR_URL = 'https://www.cifor.org';
const EII_URL = 'https://www.earthinnovation.org';
const GCFTF_URL = 'https://www.gcftf.org';
const GCFTF_KDB_URL = 'https://www.gcftaskforce-database.org';
const GFW_URL = 'https://www.globalforestwatch.org';
const INSTAGRAM_URL = 'https://www.instagram.com/gcftaskforce/';
const TCG_URL = 'https://www.theclimategroup.org';
const TWITTER_URL = 'https://twitter.com/gcftaskforce';
const YOUTUBE_URL = 'https://www.youtube.com/channel/UCI4m4y7gTCa_o75aGBXNOaw';

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
  color: white;
  cursor: pointer;
  transition: color 0.4s ease 0.05s;
  &:hover {
    /* color: #582399; */
    /* color: #b0cf44; */
    /* color: #c2e645; */
    /* color: #bfe639; */
    color: #b5db37;
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
  color: white;
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
  height: 130px;
  width: 130px;
`;

// const AcknowledgementsNote = styled.h5`
//   margin: 0 15px;
// `;

const Footer = ({ content }) => {
  const {
    MORE,
    WITH_SUPPORT_FROM,
    ABOUT,
    SOURCES,
    CONTACTS,
    BACK_TO_MAIN_SITE
  } = content;

  return (
    <FooterGrid>
      <FooterMiniGrid>
        <FooterTitle>{MORE}</FooterTitle>
        <FooterNavListGrid>
          <FooterNavListItemGrid>
            <Icon className="fas fa-info" />
            <span className="menu-text">{ABOUT}</span>
          </FooterNavListItemGrid>
          <FooterNavListItemGrid>
            <Icon className="far fa-file-pdf" />
            <span className="menu-text">{SOURCES}</span>
          </FooterNavListItemGrid>
          <FooterNavListItemGrid>
            <Icon className="far fa-address-book" />
            <span className="menu-text">{CONTACTS}</span>
          </FooterNavListItemGrid>
          <a href={GCFTF_URL} rel="noopener noreferrer" style={{ textDecoration: 'none' }} target="_blank">
            <FooterNavListItemGrid>
              <Icon className="fas fa-home" />
              <span className="menu-text">{BACK_TO_MAIN_SITE}</span>
            </FooterNavListItemGrid>
          </a>
        </FooterNavListGrid>
        <div>
          <FooterSocialGrid>
            <a href={FACEBOOK_URL} rel="noopener noreferrer" target="_blank">
              <SocialIcon className="fab fa-facebook-f fa-3x" />
            </a>
            <a href={TWITTER_URL} rel="noopener noreferrer" target="_blank">
              <SocialIcon className="fab fa-twitter fa-3x" />
            </a>
            <a href={INSTAGRAM_URL} rel="noopener noreferrer" target="_blank">
              <SocialIcon className="fab fa-instagram fa-3x" />
            </a>
            <a href={YOUTUBE_URL} rel="noopener noreferrer" target="_blank">
              <SocialIcon className="fab fa-youtube fa-3x" />
            </a>
          </FooterSocialGrid>
          <FooterCopyrightText>
            ©Governors' Climate and Forests Task Force, 2019
          </FooterCopyrightText>
        </div>
      </FooterMiniGrid>
      <FooterMiniGrid>
        <FooterTitle>{WITH_SUPPORT_FROM}</FooterTitle>
        <AcknowledgementsGrid>
          <a href={GFW_URL}>
            <Logo logo={GFWLogo} />
          </a>
          <a href={CIFOR_URL}>
            <Logo logo={CIFORLogo} />
          </a>
          <a href={EII_URL}>
            <Logo logo={EIILogo} />
          </a>
          <a href={TCG_URL}>
            <Logo logo={TCGLogo} />
          </a>
        </AcknowledgementsGrid>
        <div />
      </FooterMiniGrid>
    </FooterGrid>
  );
};

export default Footer;
