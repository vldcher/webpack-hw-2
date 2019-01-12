const array = [1,2,3,4,5];

function map(items, projectionFunction) {
  const mappedArray = [];
    items.forEach(item => {
      mappedArray.push(projectionFunction(item));
    });
  return mappedArray;
}

function multiplyByTwo(x) {
  return x * 2;
}

const mapResult = map(array, multiplyByTwo);

console.log(mapResult); // 2,4,6,8,10