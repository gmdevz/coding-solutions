const summation = (num) => num ? num += summation(num - 1) : 0;

console.log(summation(0), 0);
console.log(summation(8), 36);