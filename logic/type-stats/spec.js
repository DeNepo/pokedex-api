
const assert = require('assert');
const typeStats = require('./index.js');

const dataSample2 = require('../../data/samples/2.json');
const dataSample4 = require('../../data/samples/4.json');
const dataSample5 = require('../../data/samples/5.json');


describe("typeStats(pokeData, type) : returns how many times a type appears in the pokeData", () => {

  it('data sample 2, Grass', () => {
    const actual = typeStats(dataSample2, 'Grass');
    const expected = {
      typeCount: 5,
      typeName: 'Grass',
      weaknessCount: 0
    };
    assert.deepStrictEqual(actual, expected);
  });

  it('data sample 2, Fire', () => {
    const actual = typeStats(dataSample2, 'Fire');
    const expected = {
      typeCount: 0,
      typeName: 'Fire',
      weaknessCount: 5
    };
    assert.deepStrictEqual(actual, expected);
  });

  it('data sample 4, Normal', () => {
    const actual = typeStats(dataSample4, 'Normal');
    const expected = {
      typeCount: 2,
      typeName: 'Normal',
      weaknessCount: 0
    };
    assert.deepStrictEqual(actual, expected);
  });

  it('data sample 4, Fighting', () => {
    const actual = typeStats(dataSample4, 'Fighting');
    const expected = {
      typeCount: 0,
      typeName: 'Fighting',
      weaknessCount: 3
    };
    assert.deepStrictEqual(actual, expected);
  });

  it('data sample 5, Dragon', () => {
    const actual = typeStats(dataSample5, 'Dragon');
    const expected = {
      typeCount: 3,
      typeName: 'Dragon',
      weaknessCount: 3
    };
    assert.deepStrictEqual(actual, expected);
  });

  it('data sample 5, Fairy', () => {
    const actual = typeStats(dataSample5, 'Fairy');
    const expected = {
      typeCount: 0,
      typeName: 'Fairy',
      weaknessCount: 3
    };
    assert.deepStrictEqual(actual, expected);
  });

});
