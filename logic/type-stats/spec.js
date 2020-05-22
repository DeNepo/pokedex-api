
const assert = require('assert');
const typeStats = require('./index.js');

const dataSample2 = require('../../data/samples/2.json');
const dataSample4 = require('../../data/samples/4.json');
const dataSample5 = require('../../data/samples/5.json');

const testCases = [
  {
    name: 'typeStats: data/samples/5.json, "Dragon"',
    args: [dataSample5, 'Dragon'],
    expected: {
      typeCount: 3,
      typeName: 'Dragon',
      weaknessCount: 3
    }
  },
  {
    name: 'typeStats: data/samples/5.json, "Fairy"',
    args: [dataSample5, 'Fairy'],
    expected: {
      typeCount: 0,
      typeName: 'Fairy',
      weaknessCount: 3
    }
  },
  {
    name: 'typeStats: data/samples/2.json, "Grass"',
    args: [dataSample2, 'Grass'],
    expected: {
      typeCount: 5,
      typeName: 'Grass',
      weaknessCount: 0
    }
  },
  {
    name: 'typeStats: data/samples/2.json, "Fire"',
    args: [dataSample2, 'Fire'],
    expected: {
      typeCount: 0,
      typeName: 'Fire',
      weaknessCount: 5
    }
  },
  {
    name: 'typeStats: data/samples/4.json, "Normal"',
    args: [dataSample4, 'Normal'],
    expected: {
      typeCount: 2,
      typeName: 'Normal',
      weaknessCount: 0
    }
  },
  {
    name: 'typeStats: data/samples/4.json, "Fighting"',
    args: [dataSample4, 'Fighting'],
    expected: {
      typeCount: 0,
      typeName: 'Fighting',
      weaknessCount: 3
    }
  },
]

describe("typeStats(pokeData, type) -> returns how many times a type appears as a type and as a weakness: ", () => {
  testCases.forEach(test => {
    it(test.name, () => {
      assert.deepStrictEqual(typeStats(...test.args), test.expected);
    });
  });
});
