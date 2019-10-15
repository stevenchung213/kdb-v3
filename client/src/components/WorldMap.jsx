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
import Peru from 'fusionmaps/maps/fusioncharts.peru';
// import Spain from 'fusionmaps/maps/fusioncharts.spain';
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
// Tocantins Here!
import SpecialRegionofAceh from 'fusionmaps/maps/fusioncharts.specialregionofaceh';
import CentralKalimantan from 'fusionmaps/maps/fusioncharts.centralkalimantan';
import EastKalimantan from 'fusionmaps/maps/fusioncharts.eastkalimantan';
import NorthKalimantan from 'fusionmaps/maps/fusioncharts.northkalimantan';
// import WestKalimantan from 'fusionmaps/maps/fusioncharts.westkalimantan';
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
  SpecialRegionofAceh,
  CentralKalimantan,
  EastKalimantan,
  NorthKalimantan,
  // WestKalimantan,
  USA,
  Brazil,
  Mexico,
  Colombia,
  Ecuador,
  Peru,
  // Spain,
  Nigeria,
  Indonesia,
  CoteDivoire,
  WorldCountries,
  FusionTheme,
);

const dataSource = {
  chart: {
    caption: 'GCF Task Force National Influence',
    subcaption: 'By Number of GCF Task Force States/Provinces',
    numbersuffix: '',
    // includevalueinlabels: '1',
    // labelsepchar: ': ',
    showentitytooltip: '1',
    showentityhovereffect: '1',
    entityToolText:
      "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>States & Provinces: <b>$value</b></div>",
    entityFillHoverColor: '#FFF9C4',
    theme: 'fusion',
    nullentitycolor: '#C3D2DA',
    // entityfillhovercolor: '#FFF9C4',
    showLegend: false,
    chartLeftMargin: 150,
    // chartRightMargin: 100,
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
      newId: 'CoteDivoire',
    },
    {
      internalId: '73',
      newId: 'Nigeria',
    },
    {
      internalId: '105',
      newId: 'Indonesia',
    },
    // {
    //   internalId: '166',
    //   newId: 'Spain',
    // },
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
      id: 'CoteDivoire',
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
  ],

  linkeddata: [
    {
      id: 'us',
      linkedchart: {
        chart: {
          caption: 'Annual Sales by State',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '1',
          theme: 'fusion',
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

        data: [
          {
            id: 'tx',
            value: '5',
            link: 'newchart-json-texas',
          },
          {
            id: 'ca',
            value: '5',
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
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '1',
          theme: 'fusion',
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

        data: [
          {
            id: '001',
            value: '5',
            link: 'newchart-json-acre',
          },
          {
            id: '003',
            value: '5',
            link: 'newchart-json-amapa',
          },
          {
            id: '004',
            value: '5',
            link: 'newchart-json-amazonas',
          },
          {
            id: '010',
            value: '5',
            link: 'newchart-json-maranhao',
          },
          {
            id: '011',
            value: '5',
            link: 'newchart-json-matogrosso',
          },
          {
            id: '014',
            value: '5',
            link: 'newchart-json-para',
          },
          {
            id: '022',
            value: '5',
            link: 'newchart-json-rondonia',
          },
          {
            id: '023',
            value: '5',
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
          // TODO: Tocantins here!
        ],
      },
    },
    {
      id: 'indonesia',
      linkedchart: {
        chart: {
          caption: 'Indnesia Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '1',
          theme: 'fusion',
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

        data: [
          {
            id: '01',
            value: '5',
            link: 'newchart-json-specialregionofaceh',
          },
          {
            id: '13',
            value: '5',
            link: 'newchart-json-centralkalimantan',
          },
          {
            id: '14',
            value: '5',
            link: 'newchart-json-eastkalimantan',
          },
          {
            id: '42',
            value: '5',
            link: 'newchart-json-northkalimantan',
          },
          {
            id: '11',
            value: '5',
            // link: 'newchart-json-westkalimantan',
          },
          {
            id: '36',
            value: '5',
            // link: 'newchart-json-specialregionofpapua',
          },
          {
            id: '39',
            value: '5',
            // link: 'newchart-json-specialregionofwestpapua',
          },
        ],
        linkeddata: [
          {
            id: 'specialregionofaceh',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'centralkalimantan',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'eastkalimantan',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'northkalimantan',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          // {
          //   id: 'westkalimantan',
          //   linkedchart: {
          //     chart: {
          //       theme: 'fusion',
          //     },
          //   },
          // },
          // {
          //   id: 'specialregionofpapua',
          //   linkedchart: {
          //     chart: {
          //       theme: 'fusion',
          //     },
          //   },
          // },
          // {
          //   id: 'specialregionofwestpapua',
          //   linkedchart: {
          //     chart: {
          //       theme: 'fusion',
          //     },
          //   },
          // },
        ],
      },
    },
    {
      id: 'mexico',
      linkedchart: {
        chart: {
          caption: 'Mexico Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '1',
          theme: 'fusion',
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

        data: [
          {
            id: '004',
            value: '5',
            // link: 'newchart-json-campeche',
          },
          {
            id: '005',
            value: '5',
            // link: 'newchart-json-chiapas',
          },
          {
            id: '013',
            value: '5',
            // link: 'newchart-json-jalisco',
          },
          {
            id: '019',
            value: '5',
            // link: 'newchart-json-oaxaca',
          },
          {
            id: '022',
            value: '5',
            // link: 'newchart-json-quintanaroo',
          },
          {
            id: '026',
            value: '5',
            // link: 'newchart-json-tobasco',
          },
          {
            id: '030',
            value: '5',
            // link: 'newchart-json-yucatan',
          },
        ],
        // linkeddata: [
        // ],
      },
    },
    {
      id: 'peru',
      linkedchart: {
        chart: {
          caption: 'Peru Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '1',
          theme: 'fusion',
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

        data: [
          {
            id: '01',
            value: '5',
            // link: 'newchart-json-amazonas',
          },
          {
            id: '10',
            value: '5',
            // link: 'newchart-json-huanuco',
          },
          {
            id: '016',
            value: '5',
            // link: 'newchart-json-loreto',
          },
          {
            id: '17',
            value: '5',
            // link: 'newchart-json-madrededios',
          },
          {
            id: '20',
            value: '5',
            // link: 'newchart-json-Piura',
          },
          {
            id: '22',
            value: '5',
            // link: 'newchart-json-sanmartin',
          },
          {
            id: '25',
            value: '5',
            // link: 'newchart-json-ucayali',
          },
        ],
        // linkeddata: [
        // ],
      },
    },
    {
      id: 'colombia',
      linkedchart: {
        chart: {
          caption: 'Colombia Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '1',
          theme: 'fusion',
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

        data: [
          {
            id: '08',
            value: '5',
            // link: 'newchart-json-caqueta',
          },
        ],
        // linkeddata: [
        // ],
      },
    },
    {
      id: 'ecuador',
      linkedchart: {
        chart: {
          caption: 'Ecuador Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '1',
          theme: 'fusion',
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

        data: [
          {
            id: '18',
            value: '5',
            // link: 'newchart-json-pastaza',
          },
        ],
        // linkeddata: [
        // ],
      },
    },
    {
      id: 'cotedivoire',
      linkedchart: {
        chart: {
          caption: 'Ivory Coast Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '1',
          theme: 'fusion',
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

        data: [
          {
            id: 'CI.LC',
            value: '5',
            // link: 'newchart-json-belier',
          },
          {
            id: 'CI.MV',
            value: '5',
            // link: 'newchart-json-cavally',
          },
        ],
        // linkeddata: [
        // ],
      },
    },
    {
      id: 'nigeria',
      linkedchart: {
        chart: {
          caption: 'Nigeria Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '1',
          theme: 'fusion',
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

        data: [
          {
            id: 'NG.CR',
            value: '5',
            // link: 'newchart-json-crossriver',
          },
        ],
        // linkeddata: [
        // ],
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
