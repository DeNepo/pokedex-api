const assert = require('assert');

const findByValue = require('./index.js');

const dataSample1 = require('../../../data/samples/1.json');
const dataSample2 = require('../../../data/samples/2.json');
const dataSample4 = require('../../../data/samples/4.json');
const dataSample5 = require('../../../data/samples/5.json');


describe("findByValue(pokeData, value) : returns the name and number of all pokemon with this value in any key", () => {

  it(`data sample 1, 12`, () => {
    const actual = findByValue(dataSample1, '12');
    const expected = [
      { name: 'Caterpie', num: '010' },
      { name: 'Butterfree', num: '012' },
      { name: 'Weedle', num: '013' }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 2, Bug`, () => {
    const actual = findByValue(dataSample2, 'Bug');
    const expected = null;
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 4, None`, () => {
    const actual = findByValue(dataSample4, 'None');
    const expected = [
      { name: 'Mr. Mime', num: '122' },
      { name: 'Scyther', num: '123' },
      { name: 'Jynx', num: '124' },
      { name: 'Electabuzz', num: '125' },
      { name: 'Magmar', num: '126' },
      { name: 'Pinsir', num: '127' },
      { name: 'Tauros', num: '128' },
      { name: 'Lapras', num: '131' },
      { name: 'Ditto', num: '132' }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 5, null`, () => {
    const actual = findByValue(dataSample5, "null");
    const expected = [
      { name: 'Moltres', num: '146' },
      { name: 'Dragonite', num: '149' },
      { name: 'Mewtwo', num: '150' },
      { name: 'Mew', num: '151' }
    ];
    assert.deepStrictEqual(actual, expected);
  });

});
