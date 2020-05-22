const pokedex = require('../data/pokedex.json');
const logic = require('../logic');

const handlers = {
  home: (req, res) => {
    res.send('PokeDex API!');
  },
  all: (req, res) => {
    res.json(pokedex);
  },
  valuesForKey: (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const key = Number(req.params.key);

    // use the logic you wrote to process the pokedex data
    try {
      const result = logic.valuesForKey(pokedex, key);
      console.log(result);

      // respond with the return value if there was no error
      res.json(result);
    } catch (err) {

      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  evolutionsOf: async (res, req) => { },
  typeStats: async (res, req) => { },
  findById: async (res, req) => { },
  findByType: async (res, req) => { },
  findByWeakness: async (res, req) => { },
  findByValue: async (res, req) => { },
  findByKeyValue: async (res, req) => { },
}

module.exports = handlers;
