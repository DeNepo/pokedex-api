const assert = require('assert');

const findByKeyValue = require('./index.js');

const dataSample1 = require('../../../data/samples/1.json');
const dataSample2 = require('../../../data/samples/2.json');
const dataSample3 = require('../../../data/samples/3.json');
const dataSample4 = require('../../../data/samples/4.json');

const testCases = [
  {
    name: 'keyValue: data/samples/1.json, "name", "Weedle"',
    args: [dataSample1, 'name', 'Weedle'],
    expected: [
      { "num": "013", "name": "Weedle" }
    ]
  },
  {
    name: 'keyValue: data/samples/1.json, "id", "12"',
    args: [dataSample1, 'id', "12"],
    expected: [
      { "num": "012", "name": "Butterfree" }
    ]
  },
  {
    name: 'keyValue: data/samples/2.json, "doesNotExist", "hi!"',
    args: [dataSample2, 'doesNotExist', 'hi!'],
    expected: null
  },
  {
    name: 'keyValue: data/samples/2.json, "name", "Mew"',
    args: [dataSample2, 'name', 'Mew'],
    expected: null
  },
  {
    name: 'keyValue: data/samples/3.json, "egg", "Not in Eggs"',
    args: [dataSample3, 'egg', 'Not in Eggs'],
    expected: [
      { "num": "085", "name": "Dodrio" },
      { "num": "087", "name": "Dewgong" }
    ]
  },
  {
    name: 'keyValue: data/samples/3.json, "egg", "5 km',
    args: [dataSample3, 'egg', '5 km'],
    expected: [
      { "num": "083", "name": "Farfetch'd" },
      { "num": "084", "name": "Doduo" },
      { "num": "086", "name": "Seel" }
    ]
  },
  {
    name: 'keyValue: data/samples/4.json, "spawn_time", "N/A"',
    args: [dataSample4, 'spawn_time', 'N/A'],
    expected: [
      { "num": "132", "name": "Ditto" }
    ]
  },
]

describe("keyValue(pokeData, key, value) -> returns the number and name of all pokemon with the given key/value pair: ", () => {
  testCases.forEach(test => {
    it(test.name, () => {
      assert.deepStrictEqual(findByKeyValue(...test.args), test.expected);
    });
  });
});
