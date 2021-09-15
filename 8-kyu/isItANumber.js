const isDigit = (x) =>
  // !isNaN(x) && !isNaN(parseFloat(x));
  // x == parseFloat(x)
  parseFloat(x) === Number(x);
console.log(isDigit("-234.4"), true);
console.log(isDigit("s2324"), false);
