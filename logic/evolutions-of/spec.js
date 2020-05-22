const assert = require('assert');

const evolutionOf = require('./index.js');

const dataSample1 = require('../../data/samples/1.json');
const dataSample3 = require('../../data/samples/3.json');
const dataSample5 = require('../../data/samples/5.json');

const testCases = [
  {
    name: 'evolutionsOf: data/samples/1.json, "Squirtle"',
    args: [dataSample1, 'Squirtle'],
    expected: [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ]
  },
  {
    name: 'evolutionsOf: data/samples/1.json, "Wartortle"',
    args: [dataSample1, 'Wartortle'],
    expected: [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ]
  },
  {
    name: 'evolutionsOf: data/samples/1.json, "Blastoise"',
    args: [dataSample1, 'Blastoise'],
    expected: [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ]
  },
  {
    name: 'evolutionsOf: data/samples/5.json, "Mew"',
    args: [dataSample5, 'Mew'],
    expected: [
      { "name": "Mew", "num": "151" }
    ]
  },
  {
    name: 'evolutionsOf: data/samples/3.json, "DoesNotExist"',
    args: [dataSample3, 'DoesNotExist'],
    expected: null
  },
]

describe("evolutionOf(pokeData, name) -> returns all evolutions of a pokemon, given it's name: ", () => {
  testCases.forEach(test => {
    it(test.name, () => {
      assert.deepStrictEqual(evolutionOf(...test.args), test.expected);
    });
  });
});
