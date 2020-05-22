const assert = require('assert');

const findByWeakness = require('./index.js');

const dataSample1 = require('../../../data/samples/1.json');
const dataSample2 = require('../../../data/samples/2.json');
const dataSample3 = require('../../../data/samples/3.json');
const dataSample4 = require('../../../data/samples/4.json');
const dataSample5 = require('../../../data/samples/5.json');

const testCases = [
  {
    name: 'weakness: data/samples/5.json, "Dragon"',
    args: [dataSample5, 'Dragon'],
    expected: [
      {
        name: 'Dratini',
        num: '147'
      },
      {
        name: 'Dragonair',
        num: '148'
      },
      {
        name: 'Dragonite',
        num: '149'
      }
    ]
  },
  {
    name: 'weakness: data/samples/4.json, "Normal"',
    args: [dataSample4, 'Normal'],
    expected: null
  },
  {
    name: 'weakness: data/samples/3.json, "Fighting"',
    args: [dataSample3, 'Fighting'],
    expected: [
      {
        name: 'Dewgong',
        num: '087'
      }
    ]
  },
  {
    name: 'weakness: data/samples/2.json, "Bug"',
    args: [dataSample2, 'Bug'],
    expected: [
      {
        name: 'Paras',
        num: '046'
      },
      {
        name: 'Parasect',
        num: '047'
      }
    ]
  },
  {
    name: 'weakness: data/samples/1.json, "Electric"',
    args: [dataSample1, 'Electric'],
    expected: [
      {
        name: 'Squirtle',
        num: '007'
      },
      {
        name: 'Wartortle',
        num: '008'
      },
      {
        name: 'Blastoise',
        num: '009'
      },
      {
        name: 'Butterfree',
        num: '012'
      }
    ]
  },
]

describe("weakness(pokeData, weakness) -> returns the name and number of all pokemon with this weakness: ", () => {
  testCases.forEach(test => {
    it(test.name, () => {
      assert.deepStrictEqual(findByWeakness(...test.args), test.expected);
    });
  });
});
