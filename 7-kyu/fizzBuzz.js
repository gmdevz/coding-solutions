const fizzBuzz = (n) => {
  let res = [];
  for (let i = 1; i <= n; i++) {
    if (n === 1) {
      return [1];
    } else {
      if (i % 3 == 0 && i % 5 == 0) {
        res.push("FizzBuzz");
      } else if (i % 3 === 0) {
        res.push("Fizz");
      } else if (i % 5 === 0) {
        res.push("Buzz");
      } else {
        res.push(i);
      }
    }
  }
  return res;
};

console.log(fizzBuzz(1));
