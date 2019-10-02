/**
 * Copyright 2019-present'fusioncharts'e. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

// import './styles.css';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import USA from 'fusioncharts/maps/fusioncharts.usa';
import Brazil from 'fusionmaps/maps/fusioncharts.brazil';
import Mexico from 'fusionmaps/maps/fusioncharts.mexico';
import Colombia from 'fusionmaps/maps/fusioncharts.colombia';
import Ecuador from 'fusionmaps/maps/fusioncharts.ecuador';
import Spain from 'fusionmaps/maps/fusioncharts.spain';
import Nigeria from 'fusionmaps/maps/fusioncharts.nigeria';
import Indonesia from 'fusionmaps/maps/fusioncharts.indonesia';
import CoteDivoire from 'fusionmaps/maps/fusioncharts.cotedivoire';
import WorldCountries from 'fusionmaps/maps/fusioncharts.worldwithcountries';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Texas from 'fusionmaps/maps/fusioncharts.texas';
import California from 'fusionmaps/maps/fusioncharts.california';
import Acre from 'fusionmaps/maps/fusioncharts.acre';
import Amapa from 'fusionmaps/maps/fusioncharts.amapa';
import Amazonas from 'fusionmaps/maps/fusioncharts.amazonas';
import Maranhao from 'fusionmaps/maps/fusioncharts.maranhao';
import Matogrosso from 'fusionmaps/maps/fusioncharts.matogrosso';
import Para from 'fusionmaps/maps/fusioncharts.para';
import Rondonia from 'fusionmaps/maps/fusioncharts.rondonia';
import Roraima from 'fusionmaps/maps/fusioncharts.roraima';
import ReactFC from 'react-fusioncharts';

FusionCharts.options.creditLabel = false;
ReactFC.fcRoot(
  FusionCharts,
  Maps,
  Acre,
  Amapa,
  Amazonas,
  Maranhao,
  Matogrosso,
  Para,
  Rondonia,
  Roraima,
  Texas,
  California,
  USA,
  Brazil,
  Mexico,
  Colombia,
  Ecuador,
  Spain,
  Nigeria,
  Indonesia,
  CoteDivoire,
  WorldCountries,
  FusionTheme,
);

const dataSource = {
  chart: {
    caption: 'GCF Countries',
    subcaption: 'By Number of GCF States/Provinces',
    numbersuffix: '',
    // includevalueinlabels: '1',
    // labelsepchar: ': ',
    showentitytooltip: '0',
    showentityhovereffect: '0',
    entityToolText:
      "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>GCF States & Provinces: <b>$value</b></div>",
    entityFillHoverColor: '#FFF9C4',
    theme: 'fusion',
    nullentitycolor: '#C3D2DA',
    entityfillhovercolor: '#FFF9C4',
    showLegend: false,
    chartLeftMargin: -400,
    chartRightMargin: -400,
  },
  colorrange: {
    minvalue: '0',
    code: '#8AB458',
    gradient: '1',
    color: [
      {
        minvalue: '1',
        maxvalue: '5',
        color: '#8AB458',
      },
      {
        minvalue: '6',
        maxvalue: '9',
        color: '#426539',
        // color: '#3E522D'
      },
    ],
  },
  entityDef: [
    {
      internalId: '16',
      newId: 'Mexico',
    },
    {
      internalId: '23',
      newId: 'USA',
    },
    {
      internalId: '27',
      newId: 'Brazil',
    },
    {
      internalId: '29',
      newId: 'Colombia',
    },
    {
      internalId: '30',
      newId: 'Ecuador',
    },
    {
      internalId: '35',
      newId: 'Peru',
    },
    {
      internalId: '50',
      newId: 'Ivory Coast',
    },
    {
      internalId: '73',
      newId: 'Nigeria',
    },
    {
      internalId: '105',
      newId: 'Indonesia',
    },
    {
      internalId: '166',
      newId: 'Spain',
    },
  ],
  data: [
    {
      id: 'Mexico',
      value: '7',
      link: 'newchart-json-mexico',
    },
    {
      id: 'USA',
      value: '5',
      link: 'newchart-json-us',
    },
    {
      id: 'Brazil',
      value: '9',
      link: 'newchart-json-brazil',
    },
    {
      id: 'Colombia',
      value: '1',
      link: 'newchart-json-colombia',
    },
    {
      id: 'Ecuador',
      value: '1',
      link: 'newchart-json-ecuador',
    },
    {
      id: 'Peru',
      value: '7',
      link: 'newchart-json-peru',
    },
    {
      id: 'Ivory Coast',
      value: '2',
      link: 'newchart-json-cotedivoire',
    },
    {
      id: 'Nigeria',
      value: '1',
      link: 'newchart-json-nigeria',
    },
    {
      id: 'Indonesia',
      value: '7',
      link: 'newchart-json-indonesia',
    },
    {
      id: 'Spain',
      value: '1',
      link: 'newchart-json-spain',
    },
  ],

  linkeddata: [
    {
      id: 'us',
      linkedchart: {
        chart: {
          caption: 'Annual Sales by State',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          numberScaleValue: '1,1000,1000',
          numberScaleUnit: 'K,M,B',
          numberPrefix: '$',
          showLabels: '1',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          startlabel: 'Low',
          endlabel: 'High',
          code: '#e44a00',
          gradient: '1',
          color: [
            {
              maxvalue: '56580',
              displayvalue: 'Average',
              code: '#f8bd19',
            },
            {
              maxvalue: '100000',
              code: '#6baa01',
            },
          ],
        },

        data: [
          {
            id: 'tx',
            value: '75425',
            link: 'newchart-json-texas',
          },
          {
            id: 'ca',
            value: '55425',
            link: 'newchart-json-california',
          },
        ],
        linkeddata: [
          {
            id: 'texas',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'california',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
        ],
      },
    },
    {
      id: 'brazil',
      linkedchart: {
        chart: {
          caption: 'Brazil Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          numberScaleValue: '1,1000,1000',
          numberScaleUnit: 'K,M,B',
          numberPrefix: '$',
          showLabels: '1',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          startlabel: 'Low',
          endlabel: 'High',
          code: '#e44a00',
          gradient: '1',
          color: [
            {
              maxvalue: '56580',
              displayvalue: 'Average',
              code: '#f8bd19',
            },
            {
              maxvalue: '100000',
              code: '#6baa01',
            },
          ],
        },

        data: [
          {
            id: '001',
            value: '75425',
            link: 'newchart-json-acre',
          },
          {
            id: '003',
            value: '75425',
            link: 'newchart-json-amapa',
          },
          {
            id: '004',
            value: '55425',
            link: 'newchart-json-amazonas',
          },
          {
            id: '010',
            value: '75425',
            link: 'newchart-json-maranhao',
          },
          {
            id: '011',
            value: '75425',
            link: 'newchart-json-matogrosso',
          },
          {
            id: '014',
            value: '75425',
            link: 'newchart-json-para',
          },
          {
            id: '022',
            value: '75425',
            link: 'newchart-json-rondonia',
          },
          {
            id: '023',
            value: '75425',
            link: 'newchart-json-roraima',
          },
        ],
        linkeddata: [
          {
            id: 'acre',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'amapa',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'amazonas',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'maranhao',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'matogrosso',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'para',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'rondonia',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'roraima',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
        ],
      },
    },
  ],
};

const chartConfigs = {
  type: 'worldwithcountries',
  width: '100%',
  height: '600',
  dataFormat: 'json',
  dataSource,
  events: {
    entityClick(eventObj) {
      const maptype = eventObj.data.id.toLowerCase();
      const childType = eventObj.data.label.replace(/\s+/g, '').toLowerCase();
      eventObj.sender.configureLink([
        { type: maptype },
        { type: childType },
      ]);
    },
  },
};

// const WorldMapContainer = styled.div`
// ,,  height: 100%;
//   width: 100%;
// `;

const WorldMap = () => (
  <ReactFC {...chartConfigs} />
);

export default WorldMap;
