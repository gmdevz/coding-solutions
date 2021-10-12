// const distinct = (a) => Array.from(a);

// const distinct = (a) => [...a];

const distinct = (a) => {
  return arr.filter((value, index) => arr.indexOf(value) === index);
};

console.log(distinct([1]), [1]);
console.log(distinct([1, 2]), [1, 2]);
console.log(distinct([1, 1, 2]), [1, 2]);
