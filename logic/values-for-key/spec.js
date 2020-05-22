const assert = require('assert');

const valuesForKey = require('./index.js');

const dataSample2 = require('../../data/samples/2.json');
const dataSample3 = require('../../data/samples/3.json');
const dataSample4 = require('../../data/samples/4.json');
const dataSample5 = require('../../data/samples/5.json');

const testCases = [
  {
    name: 'valuesForKey: data/samples/2.json, "id"',
    args: [dataSample2, 'id'],
    expected: [43, 44, 45, 46, 47]
  },
  {
    name: 'valuesForKey: data/samples/3.json, "num"',
    args: [dataSample3, 'num'],
    expected: ['083', '084', '085', '086', '087']
  },
  {
    name: 'valuesForKey: data/samples/4.json, "weaknesses"',
    args: [dataSample4, 'weaknesses'],
    expected: [
      ['Bug', 'Ghost', 'Dark'],
      ['Fire', 'Electric', 'Ice', 'Flying', 'Rock'],
      ['Fire', 'Bug', 'Rock', 'Ghost', 'Dark', 'Steel'],
      ['Ground'],
      ['Water', 'Ground', 'Rock'],
      ['Fire', 'Flying', 'Rock'],
      ['Fighting'],
      ['Electric', 'Grass'],
      ['Electric', 'Rock'],
      ['Electric', 'Grass', 'Fighting', 'Rock']
    ]
  },
  {
    name: 'valuesForKey: data/samples/5.json, "next_evolution"',
    args: [dataSample5, 'next_evolution'],
    expected: [
      [
        { num: '148', name: 'Dragonair' },
        { num: '149', name: 'Dragonite' }
      ],
      [
        { num: '149', name: 'Dragonite' }
      ]
    ]
  },
  {
    name: 'valuesForKey: data/samples/4.json, "prev_evolution"',
    args: [dataSample4, 'prev_evolution'],
    expected: [
      [
        { num: '129', name: 'Magikarp' }
      ]
    ]
  },
  {
    name: 'valuesForKey: data/samples/3.json, "multipliers"',
    args: [dataSample3, 'multipliers'],
    expected: [
      null,
      [2.19, 2.24],
      [1.04, 1.96]
    ]
  }, {
    name: 'valuesForKey: data/samples/2.json, "name"',
    args: [dataSample2, 'name'],
    expected: [
      'Oddish',
      'Gloom',
      'Vileplume',
      'Paras',
      'Parasect'
    ]
  },
];

describe("valuesForKey(pokeData, key) -> returns all unique values stored in that key: ", () => {
  testCases.forEach(test => {
    it(test.name, () => {
      assert.deepStrictEqual(valuesForKey(...test.args), test.expected);
    });
  });
});
