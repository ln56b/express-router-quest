const express = require('express');
const api = require('./routes');
const app = express();
const port = 8000;

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  app.use('/api', api);

  console.log(`Server is listening on ${port}`);
});
