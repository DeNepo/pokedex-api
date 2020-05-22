const assert = require('assert');

const findByWeakness = require('./index.js');

const dataSample1 = require('../../../data/samples/1.json');
const dataSample2 = require('../../../data/samples/2.json');
const dataSample3 = require('../../../data/samples/3.json');
const dataSample4 = require('../../../data/samples/4.json');
const dataSample5 = require('../../../data/samples/5.json');


describe("findByWeakness(pokeData, weakness) : returns the name and number of all pokemon with this weakness", () => {

  it(`data sample 1, Electric`, () => {
    const actual = findByWeakness(dataSample1, 'Electric');
    const expected = [
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
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 2, Bug`, () => {
    const actual = findByWeakness(dataSample2, 'Bug');
    const expected = [
      {
        name: 'Paras',
        num: '046'
      },
      {
        name: 'Parasect',
        num: '047'
      }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 3, Fighting`, () => {
    const actual = findByWeakness(dataSample3, 'Fighting');
    const expected = [
      {
        name: 'Dewgong',
        num: '087'
      }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 4, Normal`, () => {
    const actual = findByWeakness(dataSample4, 'Normal');
    const expected = null;
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 5, Dragon`, () => {
    const actual = findByWeakness(dataSample5, 'Dragon');
    const expected = [
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
    ];
    assert.deepStrictEqual(actual, expected);
  });

});
