const express = require('express');
const routes = express.Router();
const membroControllers = require("../controllers/membro-controllers");


routes.get('/membro', membroControllers.index);


module.exports = routes;