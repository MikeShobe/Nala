import express from 'express';
import {graphql} from 'graphql';
import Schema from './data/schema.js';
import bodyParser from 'body-parser';
var Nala = require('./nala.js');

let app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded());

//create a graphQLHandler equal to Nala, which takes in Schema and DB uri.
var graphQLHandler = Nala(Schema, 'postgres://localhost/starwars');

//all requests handled by graphQLHandler variable
app.post('/',graphQLHandler);

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is listening on port 3000.");
});

module.exports = app;
