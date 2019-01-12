function multiply(x, y) {
    return x * y;
}

const multipleResult = multiply(2,3);
console.log('basic multiply:', multipleResult); // 6

//curry
const curriedMultiply = a => b => a * b;

const curriedMultipleResult = curriedMultiply(2)(3);
console.log('curried multiply:', curriedMultipleResult); // 6