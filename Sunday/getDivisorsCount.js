const getDivisorsCnt = (n) => {
  let [divisor, i] = [0, n];
  for (divisor, i; i > 0; i--) {
    if (n % i === 0) divisor++;
  }
  return divisor;
};

console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);
