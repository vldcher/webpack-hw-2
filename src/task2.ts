const testObject = [
  { text: 'film1', duration: 10 },
  { text: 'film2', duration: 20 },
  { text: 'film3', duration: 30 },
  { text: 'film4', duration: 40 },
]

function reduce(items, projectionFunction, accumulator) {
  let result = accumulator;
  items.forEach(item => {
   result = projectionFunction(item, result);
  });
  return result;
}

function addDuration(item, accumulator) {
  return item.duration + accumulator;
}

const reduceResult = reduce(testObject, addDuration, 0);

console.log(reduceResult); //100