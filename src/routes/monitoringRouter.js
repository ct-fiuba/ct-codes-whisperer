const express = require('express');

const port = process.env.PORT;

module.exports = function monitoringRouter() {
  return express.Router()
    .get('/', (req, res) => res.status(200).send('Hi! You are hitting port ' + port + ', where lives the Code Whisperer!'))
    .get('/ping', (req, res) => res.status(200).send('Im alive'))
};
