/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import PieChart from './PieChart';

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

const dataSourceConfig3 = {
  caption: 'Major Vegetation Types',
  xAxisName: 'Vegetation Type',
  yAxisName: 'Land Area (km²)',
  numberSuffix: ' km²',
};

const VegetationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* justify-items: center; */
`;

const NJVegetation = () => (
  <VegetationGrid>
    <PieChart
      data={data3}
      dataSourceConfig={dataSourceConfig3}
      justify="center"
    />
  </VegetationGrid>
);

export default NJVegetation;
