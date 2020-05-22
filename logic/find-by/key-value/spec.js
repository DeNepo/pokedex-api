const assert = require('assert');

const findByKeyValue = require('./index.js');

const dataSample1 = require('../../../data/samples/1.json');
const dataSample2 = require('../../../data/samples/2.json');
const dataSample3 = require('../../../data/samples/3.json');
const dataSample4 = require('../../../data/samples/4.json');


describe("findByKeyValue(pokeData, key, value) : returns the number and name of all pokemon with the given key/value pair", () => {

  it(`data sample 1, name, Weedle`, () => {
    const actual = findByKeyValue(dataSample1, 'name', 'Weedle');
    const expected = [
      { "num": "013", "name": "Weedle" }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 1, id, 12`, () => {
    const actual = findByKeyValue(dataSample1, 'id', "12");
    const expected = [
      { "num": "012", "name": "Butterfree" }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 2, doesNotExist, hi!`, () => {
    const actual = findByKeyValue(dataSample2, 'doesNotExist', 'hi!');
    const expected = null;
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 2, name, Mew`, () => {
    const actual = findByKeyValue(dataSample2, 'name', 'Mew');
    const expected = null;
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 3, egg, Not in Eggs`, () => {
    const actual = findByKeyValue(dataSample3, 'egg', 'Not in Eggs');
    const expected = [
      { "num": "085", "name": "Dodrio" },
      { "num": "087", "name": "Dewgong" }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 3, egg, 5 km`, () => {
    const actual = findByKeyValue(dataSample3, 'egg', '5 km');
    const expected = [
      { "num": "083", "name": "Farfetch'd" },
      { "num": "084", "name": "Doduo" },
      { "num": "086", "name": "Seel" }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 4, spawn_time, N/A`, () => {
    const actual = findByKeyValue(dataSample4, 'spawn_time', 'N/A');
    const expected = [
      { "num": "132", "name": "Ditto" }
    ];
    assert.deepStrictEqual(actual, expected);
  });

});

