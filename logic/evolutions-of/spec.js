const assert = require('assert');

const evolutionOf = require('./index.js');

const dataSample1 = require('../../data/samples/1.json');
const dataSample3 = require('../../data/samples/3.json');
const dataSample5 = require('../../data/samples/5.json');


describe("evolutionOf(pokeData, name) : returns all evolutions of a pokemon: ", () => {

  it(`data sample 1, Squirtle`, () => {
    const actual = evolutionOf(dataSample1, 'Squirtle');
    const expected = [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 1, Wartortle`, () => {
    const actual = evolutionOf(dataSample1, 'Wartortle');
    const expected = [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 1, Blastoise`, () => {
    const actual = evolutionOf(dataSample1, 'Blastoise');
    const expected = [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 3, DoesNotExist`, () => {
    const actual = evolutionOf(dataSample3, 'DoesNotExist');
    const expected = null;
    assert.strictEqual(actual, expected);
  });

  it(`data sample 5, Mew`, () => {
    const actual = evolutionOf(dataSample5, 'Mew');
    const expected = [
      { "name": "Mew", "num": "151" }
    ];
    assert.deepStrictEqual(actual, expected);
  });

});
