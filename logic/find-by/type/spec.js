const assert = require('assert');

const findByType = require('./index.js');

const dataSample1 = require('../../../data/samples/1.json');
const dataSample2 = require('../../../data/samples/2.json');
const dataSample3 = require('../../../data/samples/3.json');
const dataSample4 = require('../../../data/samples/4.json');
const dataSample5 = require('../../../data/samples/5.json');


describe("findByType(pokeData, type) : returns the name and number of all pokemon with this type", () => {

  it(`data sample 1, Bug`, () => {
    const actual = findByType(dataSample1, 'Bug');
    const expected = [
      { name: 'Caterpie', num: '010' },
      { name: 'Metapod', num: '011' },
      { name: 'Butterfree', num: '012' },
      { name: 'Weedle', num: '013' },
      { name: 'Kakuna', num: '014' },
      { name: 'Beedrill', num: '015' }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 2, Bug`, () => {
    const actual = findByType(dataSample2, 'Bug');
    const expected = [
      { name: 'Paras', num: '046' },
      { name: 'Parasect', num: '047' }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 3, Water`, () => {
    const actual = findByType(dataSample3, 'Water');
    const expected = [
      { name: 'Seel', num: '086' },
      { name: 'Dewgong', num: '087' }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 4, Normal`, () => {
    const actual = findByType(dataSample4, 'Normal');
    const expected = [
      { name: 'Tauros', num: '128' },
      { name: 'Ditto', num: '132' }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 5, Dragon`, () => {
    const actual = findByType(dataSample5, 'Dragon');
    const expected = [
      { name: 'Dratini', num: '147' },
      { name: 'Dragonair', num: '148' },
      { name: 'Dragonite', num: '149' }
    ];
    assert.deepStrictEqual(actual, expected);
  });

});
