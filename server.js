const express = require('express');
const path = require('path');
const port = process.env.PORT || 7070;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile('./dist/index.html', {root: __dirname});
});

app.listen(port);