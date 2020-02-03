// importa o gerencador de rotas do express
const { Router } = require('express');

// importa o DevController
const DevController = require('./Controllers/DevController');
const SearchController = require('./Controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes; 