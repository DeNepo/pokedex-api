const express = require('express');
const router = express.Router();

const handlers = require('./handlers');


router.get("/", handlers.home);

router.get('/all', handlers.all);

router.get('/values-for-key/:key', handlers.valuesForKey);

router.get('/evolutions-of/:name', handlers.evolutionsOf);

router.get('/type-stats/:type', handlers.typeStats);

router.get('/find-by/id/:id', handlers.findById);

router.get('/find-by/type/:type', handlers.findByType);

router.get('/find-by/weakness/:type', handlers.findByWeakness);

router.get('/find-by/value/:value', handlers.findByValue);

router.get('/find-by/key-value/:key/:value', handlers.findByKeyValue);


module.exports = router;
