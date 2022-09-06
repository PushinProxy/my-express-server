//jshint esversion:6


const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send("Hello");
});

app.listen(3000, () => {
  console.log(`Server started on port ${port}`);
});
