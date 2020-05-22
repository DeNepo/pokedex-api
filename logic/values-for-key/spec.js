const assert = require('assert');

const valuesForKey = require('./index.js');

const dataSample2 = require('../../data/samples/2.json');
const dataSample3 = require('../../data/samples/3.json');
const dataSample4 = require('../../data/samples/4.json');
const dataSample5 = require('../../data/samples/5.json');

describe("valuesForKey(pokeData, key) : returns all unique values stored in that key", () => {

  it(`data sample 2, id`, () => {
    const actual = valuesForKey(dataSample2, 'id');
    const expected = [43, 44, 45, 46, 47];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 2, name`, () => {
    const actual = valuesForKey(dataSample2, 'name');
    const expected = [
      'Oddish',
      'Gloom',
      'Vileplume',
      'Paras',
      'Parasect'
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 3, num`, () => {
    const actual = valuesForKey(dataSample3, 'num');
    const expected = ['083', '084', '085', '086', '087'];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 3, multipliers`, () => {
    const actual = valuesForKey(dataSample3, 'multipliers');
    const expected = [
      null,
      [2.19, 2.24],
      [1.04, 1.96]
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 4, weaknesses`, () => {
    const actual = valuesForKey(dataSample4, 'weaknesses');
    const expected = [
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
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 4, prev_evolution`, () => {
    const actual = valuesForKey(dataSample4, 'prev_evolution');
    const expected = [
      [
        { num: '129', name: 'Magikarp' }
      ]
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 5, next_evolution`, () => {
    const actual = valuesForKey(dataSample5, 'next_evolution');
    const expected = [
      [
        { num: '148', name: 'Dragonair' },
        { num: '149', name: 'Dragonite' }
      ],
      [
        { num: '149', name: 'Dragonite' }
      ]
    ];
    assert.deepStrictEqual(actual, expected);
  });

});
