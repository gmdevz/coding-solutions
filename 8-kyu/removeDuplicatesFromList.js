// Solution 1
// const distinct = (a) => {
//   return arr.filter((value, index) => arr.indexOf(value) === index);
// };

// Solution 2
// const distinct = (a) => [...new Set(a)];

// Solution 3
const distinct = (a) => Array.from(new Set(a));

console.log(distinct([1]), [1]);
console.log(distinct([1, 2]), [1, 2]);
console.log(distinct([1, 1, 2]), [1, 2]);
