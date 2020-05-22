'use strict'

const fs = require('fs');
const path = require('path');
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');

const pokedex = require('./data/pokedex.json');
const logic = require("./logic");

const app = express();

app.use(cors());

app.use(morgan('combined', {
  stream: fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' }
  )
}));
if (config.MODE === 'development') {
  app.use(morgan('dev'));
};


app.get("/", function (req, res) {
  res.send('PokeDex API!');
});

app.get('/all', (req, res) => {
  res.json(pokedex);
});


// -- example route to study --
app.get('/values-for-key/:key', (req, res) => {
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
});


app.get('/evolutions-of/:name', (req, res) => { });

app.get('/type-stats/:type', (req, res) => { });

app.get('/find-by/id/:id', (req, res) => { });

app.get('/find-by/type/:type', (req, res) => { });

app.get('/find-by/weakness/:type', (req, res) => { });

app.get('/find-by/value/:value', (req, res) => { });

app.get('/find-by/key-value/:key/:value', (req, res) => { });


app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send("something went wrong")
});

app.listen(config.PORT, () => {
  console.log(
    `listening at http://localhost:${config.PORT} (${config.MODE} mode)`
  );
});
