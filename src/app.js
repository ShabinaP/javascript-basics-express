const express = require('express');
const { add, subtract, multiply, divide } = require('./lib/numbers');
const { sayHello } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');
const { getNthElement } = require('./lib/arrays');

const app = express();

app.use(express.json());

app.get('/strings/hello/:myPhrase', (request, response) => {
  const phrase = request.params.myPhrase;
  response.status(200).json({ result: `Hello, ${phrase}!` });
});

app.get('/strings/upper/:phrase', (request, response) => {
  const phrase = request.params.phrase.toUpperCase();
  response.status(200).json({ result: `${phrase}` });
});

app.get('/strings/lower/:phrase', (request, response) => {
  const phrase = request.params.phrase.toLowerCase();
  response.status(200).json({ result: `${phrase}` });
});

app.get('/strings/first-characters/:chars', (request, response) => {
  const chars = request.params.chars.charAt(0);
  response.status(200).json({ result: `${chars}` });
});

app.get('/strings/first-characters/:character', (request, response) => {
  const character = request.query;
  const length = request.query.length;
  const character1 = character.substring(0, length);
  response.status(200).json({ result: character1 });
});

app.get('/numbers/add/:a/and/:b', (request, response) => {
  const a = parseInt(request.params.a, 10);
  const b = parseInt(request.params.b, 10);
  return Number.isNaN(a) || Number.isNaN(b)
    ? response.status(400).json({ error: 'Parameters must be valid numbers.' })
    : response.status(200).json({ result: a + b });
});

app.get('/numbers/subtract/:a/from/:b', (request, response) => {
  // eslint-disable-next-line radix
  const a = parseInt(request.params.a);
  // eslint-disable-next-line radix
  const b = parseInt(request.params.b);
  return Number.isNaN(a) || Number.isNaN(b)
    ? response.status(400).json({ error: 'Parameters must be valid numbers.' })
    : response.status(200).json({ result: b - a });
});

app.post('/numbers/multiply', (request, response) => {
  return Number.isNaN(request.body.a) || Number.isNaN(request.body.b)
    ? response.status(400).json({ error: 'Parameters must be valid numbers.' })
    : response.status(200).json({ result: request.body.a * request.body.b });
});

app.post('/numbers/multiply', (request, response) => {
  if (request.body.a || request.body.b === undefined) {
    response.status(400).json({ result: 'Parameters "a" and "b" are required.' });
  }
});

app.post('/numbers/divide', (request, response) => {
  response.status(200).json({ result: request.body.a / request.body.b });
});

app.post('/numbers/divide', (request, response) => {
  if (request.body.a || request.body.b === 0) {
    response.status(200).json({ result: 0 });
  }
});

app.post('/numbers/remainder', (request, response) => {
  response.status(200).json({ result: request.body.a % request.body.b });
});

app.post('/numbers/remainder', (request, response) => {
  if (request.body.a || request.body.b === 0) {
    response.status(200).json({ result: 0 });
  }
});

app.post('/booleans/negate', (request, response) => {
  if (request.body.value === true) {
    response.status(200).json({ result: !true });
  } else if (request.body.value === false) {
    response.status(200).json({ result: !false });
  }
});

app.post('/booleans/truthiness', (request, response) => {
  const testValue = request.body.value;
  if (testValue === '' || testValue === 0 || testValue === null) {
    response.status(200).json({ result: false });
  } else if (typeof testValue === 'string' || typeof testValue === 'number') {
    response.status(200).json({ result: true });
  }
});

app.get('/booleans/is-odd/:a', (request, response) => {
  // eslint-disable-next-line radix
  const a = parseInt(request.params.a);
  response.status(200).json({ result: !(a % 2 === 0) });
});

app.get('/booleans/:string/starts-with/:c', (request, response) => {
  const string = request.params.string;
  const c = request.params.c;
  response.status(200).json({ result: string.startsWith(c) });
});

app.post('/arrays/element-at-index/:index', (request, response) => {
  // eslint-disable-next-line radix
  const index = parseInt(request.params.index);
  const array2 = request.body.array;
  response.status(200).json({ result: array2[index] });
});

app.post('/arrays/to-string', (request, response) => {
  const array = request.body.array.toString();
  response.status(200).json({ result: `${array}` });
});

app.post('/arrays/append', (request, response) => {
  const a = request.body.value;
  const array1 = request.body.array.concat(a);
  response.status(200).json({ result: array1 });
});

app.post('/arrays/starts-with-vowel', (request, response) => {
  const array = request.body.array.filter(str => /^[aeiouAEIOU]/i.test(str));
  response.status(200).json({ result: array });
});

app.post('/arrays/remove-element', (request, response) => {
  const { index = 0 } = request.query;
  const { array } = request.body;
  array.splice(index, 1);

  response.status(200).json({ result: array });
});

module.exports = app;
