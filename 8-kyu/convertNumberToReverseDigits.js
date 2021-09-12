const digitize = (n) =>
  // n
  //   .toString()
  //   .split("")
  //   .reverse()
  //   .map((x) => parseInt(x));
  String(n).split("").map(Number).reverse();

console.log(digitize(35231), [1, 3, 2, 5, 3]);
