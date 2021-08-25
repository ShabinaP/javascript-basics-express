const sayHello = phrase => `Hello, ${phrase}!`;

const uppercase = phrase => phrase.toUpperCase();

const lowercase = phrase => phrase.toLowerCase();

const countCharacters = string => string.length;

const firstCharacter = chars => chars.charAt(0);

const firstCharacters = (chars, n) => chars.substring(0, n);

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
