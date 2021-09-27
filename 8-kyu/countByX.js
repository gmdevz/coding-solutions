const countBy = (x, n) => {
  let i = 1;
  let z = [];

  while (z.length < n) {
    z.push(x * i);
    i++;
    console.log(z.length);
  }
  return z;
};

console.log(countBy(2, 5));
