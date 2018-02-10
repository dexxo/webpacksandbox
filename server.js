'use strict';
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(8080, () => {
  process.stdout.write('the server is available on http://localhost:8080/\n');
});

module.exports = app;
