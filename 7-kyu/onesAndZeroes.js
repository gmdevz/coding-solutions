const binaryArrayToNumber = (arr) => {
  // integer to binary
  // return parseInt(arr.toString().split(',').join(''))

  // bianry to integer
  // return parseInt(arr.toString().split(",").join(""), 2);

  // shortest
  return parseInt(arr.join(""), 2);
};

console.log(binaryArrayToNumber([0, 0, 1, 0]), 2);
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15);
