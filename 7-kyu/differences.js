const differences = (a) => {
  while (a.length !== 1) {
    a = a.slice(1).map(function (n, i) {
      return Math.abs(n - a[i]);
    });
  }
  return +a;
};

console.log(differences([2, 3, 1]), 1);
console.log(differences([1, 5, 2, 7, 8, 9, 0]), 1);
console.log(differences([2, 3, 1]), 1);
console.log(differences([-1, 2, 3]), 2);
