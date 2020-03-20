"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

app.post('/', function (req, res) {
  console.log(req.body);
  res.send(req.body);
})

//Server listening
const server = app.listen(8887,() =>{
    console.log('Server started on port 8887...');
});
