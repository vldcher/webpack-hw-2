const Ramda = require('ramda');

function multiply(x, y) {
  return x * y;
}

const curriedMultiplyRamda = Ramda.curry(multiply);

const curriedMultipleRamdaResult = curriedMultiplyRamda(2)(3);

console.log('curried multiply using Ramda:', curriedMultipleRamdaResult); // 6