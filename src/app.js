const express = require('express');
const { sayHello } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:myPhrase', (request, response) => {
  const phrase = request.params.myPhrase;
  response.status(200).json({ result: `Hello, ${phrase}!` });
});

app.get('/strings/upper/hello', (request, response) => {
  response.status(200).json({ result: 'HELLO' });
});

app.get('/strings/lower/HELLO', (request, response) => {
  response.status(200).json({ result: 'hello' });
});

app.get('/strings/first-characters/hello', (request, response) => {
  response.status(200).json({ result: 'h' });
});

app.get('/strings/first-characters/sd32fg45', (request, response) => {
  response.status(200);
  const reqQueryObject = request.query;
  response.json({ result: 'sd32' });
});


module.exports = app;
