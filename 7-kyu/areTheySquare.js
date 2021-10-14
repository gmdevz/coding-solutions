const isSquare = (arr) => {
  // return arr > 0 && Math.sqrt(arr) % 1 === 0;
  return arr.length === 0
    ? undefined
    : arr.every((num) => Math.sqrt(num).toString() <= num.toString().length);
};

console.log(isSquare([1, 4, 9, 16, 25, 36]), true);
console.log(isSquare([1, 2, 3, 4, 5, 6]), false);
console.log(isSquare([]), undefined);
console.log(isSquare([1, 2, 4, 15]), false);
