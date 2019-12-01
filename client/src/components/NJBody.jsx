/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Tile from './Tile';
import DoughnutChart from './DoughnutChart';
import PieChart from './PieChart';
import BarChart from './BarChart';
import StackedColumnChart from './StackedColumnChart';
import LineChart from './LineChart';

import LawList from './LawList';

const NJBodyStyled = styled.div`
  background-color: #e5e5e5;
  /* background-color: #fff;
  background-image: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%); */
  height: 100%;
  width: 100vw;
  padding: 2.5%;
`;

const ForestAndLandUseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 800px 800px 1000px;
  grid-gap: 5%;

  height: 100%;
  width: 100%;
`;

const LandGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr 2fr;
`;

const LandTitle = styled.h3`
  grid-column: 1/3;
  height: 100%;
  /* padding-top: 20px; */
  margin: 0;
  text-align: center;
  width: 100%;
`;

const CO2EmissionsGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr 1.2fr 0.4fr 1fr 1.25fr 8fr 1fr 0.75fr;
  justify-items: center;

  height: 100%;
  width:100%;
`;

const CO2EmissionsTitle = styled.h3`
  height: 100%;
  /* padding-top: 20px; */
  margin: 0;
  text-align: center;
  width: 100%;
`;

const CO2EmissionsTotalTitle = styled.div`
  align-self: end;
  font-weight: 600;
  text-align: center;
`;

const CO2EmissionsTotalValue = styled.h1`
  align-self: end;
  margin: 0;
`;

const CO2EmissionsTotalYear = styled.div`
  align-self: start;
  font-size: 12px;
`;

const CO2EmissionsHowIsThisCalculated = styled.h3`
  align-self: center;
  /* font-size: 12px; */
  margin: 0;
`;

const CO2EmissionsText = styled.div`
  /* font-size: */
  align-self: center;
  padding: 0 5%;
`;

const CO2EmissionsCitation = styled.div`
  align-self: center;
  justify-self: end;
  font-size: 14px;
  padding: 0 1.25%;
`;

const VegetationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* justify-items: center; */
`;

const DeforestationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 5fr 5fr;
  /* justify-items: center; */
  height: 100%;
  width: 100%;
`;

const DeforestationTitle = styled.h3`
  grid-column: 1/4;
  height: 100%;
  /* padding-top: 20px; */
  margin: 0;
  text-align: center;
  width: 100%;
`;

const DeforestationText = styled.div`
  grid-column: 1/3;
  padding: 0 5%;
  width: 100%;
`;

const DeforestationTagList = styled.ul`
  list-style-type: none;
  overflow: hidden;
  overflow-y: scroll;
  height: 250px;
  width: 100%;
`;

const DeforestationTagListItem = styled.li`
  border: 1px solid black;
  background-color: tomato;
  height: 50px;
  margin: 15px 0;
  width: 90%;
`;

const NJBody = () => {
  let { pageId } = useParams();
  if (!pageId) {
    pageId = 'No ID!';
  }

  const data1 = [
    {
      label: 'Forest',
      value: 246856,
      // color: '#ff69b4',
    },
    {
      label: 'Non-Forest',
      value: 123456,
    },
  ];

  const data2 = [
    {
      label: 'Protected',
      value: 206856,
      // color: '#ff69b4',
    },
    {
      label: 'Unprotected',
      value: 163456,
    },
  ];

  const data3 = [
    {
      label: 'Forest',
      value: 246856,
      // color: '#ff69b4',
    },
    {
      label: 'Pasture',
      value: 100000,
    },
    {
      label: 'Agriculture',
      value: 20000,
    },
    {
      label: 'Secondary',
      value: 3000,
    },
    {
      label: 'Other',
      value: 456,
    },
  ];

  const categories4 = [
    {
      category: [
        { label: '2001' },
        { label: '2002' },
        { label: '2003' },
        { label: '2004' },
        { label: '2005' },
        { label: '2006' },
        { label: '2018' },
        { label: '2008' },
        { label: '2009' },
        { label: '2010' },
        { label: '2011' },
        { label: '2012' },
        { label: '2013' },
        { label: '2014' },
        { label: '2015' },
        { label: '2016' },
        { label: '2017' },
        { label: '2018' },
      ],
    },
  ];

  const data4 = [
    {
      seriesname: 'Below Ground Biomass',
      data: [
        { value: 6.53 },
        { value: 14.20 },
        { value: 15.15 },
        { value: 11.78 },
        { value: 10.93 },
        { value: 3.50 },
        { value: 2.45 },
        { value: 4.34 },
        { value: 2.46 },
        { value: 3.99 },
        { value: 4.44 },
        { value: 4.10 },
        { value: 3.04 },
        { value: 5.19 },
        { value: 3.37 },
        { value: 4.78 },
        { value: 3.30 },
        { value: 5.71 },
      ],
    },
    {
      seriesname: 'Above Ground Biomass',
      data: [
        { value: 24.10 },
        { value: 36.62 },
        { value: 39.08 },
        { value: 30.39 },
        { value: 28.18 },
        { value: 9.02 },
        { value: 6.31 },
        { value: 11.20 },
        { value: 6.35 },
        { value: 10.28 },
        { value: 11.45 },
        { value: 10.57 },
        { value: 7.84 },
        { value: 13.39 },
        { value: 8.68 },
        { value: 17.65 },
        { value: 12.19 },
        { value: 21.06 },
      ],
    },
    {
      seriesname: 'Litter',
      data: [
        { value: 0.72 },
        { value: 1.57 },
        { value: 1.68 },
        { value: 1.30 },
        { value: 1.21 },
        { value: 0.39 },
        { value: 0.27 },
        { value: 0.48 },
        { value: 0.27 },
        { value: 0.44 },
        { value: 0.49 },
        { value: 0.45 },
        { value: 0.34 },
        { value: 0.57 },
        { value: 0.37 },
        { value: 0.53 },
        { value: 0.37 },
        { value: 0.63 },
      ],
    },
  ];

  const data6 = [
    {
      label: 'Still<br/>Forested',
      value: 148125,
    },
    {
      label: 'Deforested',
      value: 16096,
      // color: '#ff69b4',
    },
  ];

  const dataTotal1 = data1.reduce((acc, { value }) => acc + value, 0).toLocaleString();
  const dataTotal2 = data2.reduce((acc, { value }) => acc + value, 0).toLocaleString();
  const dataTotal6 = data6.reduce((acc, { value }) => acc + value, 0).toLocaleString();

  const dataSourceConfig1 = {
    caption: 'Land Distribution',
    centerLabel: '$label:<br/><br/>$value',
    defaultCenterLabel: `Total:<br/><br/>${dataTotal1} km²`,
    numberSuffix: ' km²',
  };

  const dataSourceConfig2 = {
    caption: 'Forest Management',
    centerLabel: '$label:<br/><br/>$value',
    defaultCenterLabel: `Total:<br/><br/>${dataTotal2} km²`,
    numberSuffix: ' km²',
  };

  const dataSourceConfig3 = {
    caption: 'Major Vegetation Types',
    xAxisName: 'Vegetation Type',
    yAxisName: 'Land Area (km²)',
    numberSuffix: ' km²',
  };

  const dataSourceConfig4 = {
    caption: 'CO₂ Emissions from Deforestation vs Time',
    xAxisName: 'Year',
    yAxisName: 'CO₂ Mass (Million Tonnes, MtC)',
    numberSuffix: ' MtC',
  };

  const dataSourceConfig5 = {
    caption: 'Deforestation Rate',
    xAxisName: 'Year',
    yAxisName: 'Deforested Area (km²)',
    numberSuffix: ' km²',
  };

  const dataSourceConfig6 = {
    caption: 'Total Deforestation',
    centerLabel: '$label:<br/><br/>$value',
    defaultCenterLabel: `Original<br/>Forest Area:<br/><br/>${dataTotal6} km²`,
    numberSuffix: ' km²',
  };

  return (
    <NJBodyStyled>
      <center>{`Nation/Jurisidiction ${pageId} page!`}</center>
      <br />
      <br />
      <ForestAndLandUseGrid>
        <Tile gridColumn="1/3">
          <LandGrid>
            <LandTitle>Land</LandTitle>
            <DoughnutChart
              data={data1}
              dataSourceConfig={dataSourceConfig1}
              justify="left"
            />
            <DoughnutChart
              data={data2}
              dataSourceConfig={dataSourceConfig2}
              justify="right"
            />
            <BarChart
              data={data3}
              dataSourceConfig={dataSourceConfig3}
              justify="left"
            />
          </LandGrid>
        </Tile>
        <Tile gridColumn="3/5">
          <CO2EmissionsGrid>
            <CO2EmissionsTitle>CO₂ Emissions</CO2EmissionsTitle>
            <CO2EmissionsTotalTitle>Total CO₂ Emissions from Deforestation:</CO2EmissionsTotalTitle>
            <CO2EmissionsTotalValue>760.4 Million Tonnes</CO2EmissionsTotalValue>
            <CO2EmissionsTotalYear>2001 - 2018</CO2EmissionsTotalYear>
            <CO2EmissionsHowIsThisCalculated>
              How is this Calculated?
            </CO2EmissionsHowIsThisCalculated>
            <CO2EmissionsText>
              To estimate CO₂ emissions, we calculated the spatially explicit carbon losses occured over the PRODES deforestation polygons using the Baccini et al carbon map.
            </CO2EmissionsText>
            <StackedColumnChart
              categories={categories4}
              data={data4}
              dataSourceConfig={dataSourceConfig4}
              justify="left"
            />
            <CO2EmissionsText>
              This plot shows the estimated emissions of CO₂ (million tonnes) associated with the clearing of forest in this state.
            </CO2EmissionsText>
            <CO2EmissionsCitation>
              Source: Brazil UNFCCC Brazil FREL submission
            </CO2EmissionsCitation>
          </CO2EmissionsGrid>
        </Tile>
        <Tile gridColumn="1/2">
          <VegetationGrid>
            <PieChart
              data={data3}
              dataSourceConfig={dataSourceConfig3}
              justify="center"
            />
          </VegetationGrid>
        </Tile>
        <Tile gridColumn="2/5">
          <DeforestationGrid>
            <DeforestationTitle>Deforestation</DeforestationTitle>
            <DoughnutChart
              data={data6}
              dataSourceConfig={dataSourceConfig6}
              gridColumn="1/2"
              justify="left"
            />
            <LineChart
              data={null}
              dataSourceConfig={dataSourceConfig5}
              gridColumn="2/4"
              justify="center"
            />
            <DeforestationText>
              <p>
                The majority of deforestation in Acre occurs along primary and secondary roads as well as rivers. The main driver of deforestation in Acre is cattle ranching (occupying 70% of the total area deforested in 1989 and increasing to 81% in 2004). Factors such as land speculation, lack of zoning and formal designation of public lands, profitability of cattle ranching, and subsidized loans for ranching have created incentives for deforestation throughout the Amazon, including Acre.
              </p>
              <p>
              Historically, the main agents of deforestation agents were owners of mid-size and large farms and ranches, but in recent years smallholder farmers have contributed significantly to deforestation in Acre. The pavement of the BR-317 (completed in 2007) and BR-364 (completed in 2011) highways now connect the southwestern Amazon (including Acre) to Peruvian Pacific coast harbors and is likely to lead to increased deforestation. The risk of deforestation is likely to be most intense along the BR-364 from Sena Madureira to Cruzeiro do Sul.
              </p>
            </DeforestationText>
            <div>
              <CO2EmissionsTotalTitle>
                Drivers of Deforestation
              </CO2EmissionsTotalTitle>
              <DeforestationTagList>
                <DeforestationTagListItem>Tag 1</DeforestationTagListItem>
                <DeforestationTagListItem>Tag 2</DeforestationTagListItem>
                <DeforestationTagListItem>Tag 3</DeforestationTagListItem>
                <DeforestationTagListItem>Tag 4</DeforestationTagListItem>
                <DeforestationTagListItem>Tag 5</DeforestationTagListItem>
                <DeforestationTagListItem>Tag 6</DeforestationTagListItem>
                <DeforestationTagListItem>Tag 7</DeforestationTagListItem>
                <DeforestationTagListItem>Tag 8</DeforestationTagListItem>
                <DeforestationTagListItem>Tag 9</DeforestationTagListItem>
                <DeforestationTagListItem>Tag 10</DeforestationTagListItem>
              </DeforestationTagList>
            </div>
          </DeforestationGrid>
        </Tile>

        <LawList />
      </ForestAndLandUseGrid>
    </NJBodyStyled>
  );
};

export default NJBody;
