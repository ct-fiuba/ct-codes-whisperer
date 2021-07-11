const express = require('express');

const compromisedCodeHandler = require('../models/handlers/CompromisedCodeHandler');
const billboardController = require('../controllers/billboardController')(compromisedCodeHandler());

module.exports = function visitsRouter() {
  return express.Router().use(
    '/billboard',
    express.Router()
      .get('/', billboardController.get)
  );
};
