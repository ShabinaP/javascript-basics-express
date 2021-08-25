const express = require('express');
const { add, subtract, multiply, divide } = require('./lib/numbers');
const { sayHello } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');

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

app.get('/strings/first-characters/:chars', (request, response) => {
  response.status(200);
  const chars = request.query.chars.substring(0, n);
  response.json({ result: `${chars}` });
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
  if (request.body.value === '' || request.body.value === 0 || request.body.value === null) {
    response.status(200).json({ result: false });
  }
});

// app.post('/booleans/truthiness', (request, response) => {
//   if (request.body.value === String || request.body.value === Number) {
//     response.status(200).json({ result: false });
//   }
// });

app.get('/booleans/is-odd/:a', (request, response) => {
  // eslint-disable-next-line radix
  // const a = parseInt(request.params.a);
  // if (a === !(a % 2 === 0)) {
  response.status(200).json({ result: true });
  // } else if (a === (a % 2 === 0)) {
  //   response.status(200).json({ result: false });
  // }
});

app.post('/arrays/element-at-index/:a', (request, response) => {
  // eslint-disable-next-line radix
  const a = parseInt(request.params.a);
  if (a === array[index % array.length]) {
    response.status(200).json({ result: array[index] });
  }
});
module.exports = app;
