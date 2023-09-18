const express = require('express');
const config = require('../config.js');

const app = express();

app.get('/', (_req, res) => {
  res.send(`Envirement: ${config.NODE_ENV}`)
})

app.listen(config.PORT, config.HOST, () => {
  console.log(`App listening on http://${config.HOST}:${config.PORT}`);
})
