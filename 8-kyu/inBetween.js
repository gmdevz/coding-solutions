const between = (a, b) => {
  let n = [];
  for (a; a <= b; a++) {
    n.push(a);
  }
  return n;
};

console.log(between(-2, 2), [-2, -1, 0, 1, 2]);
console.log(between(1, 4), [1, 2, 3, 4]);
