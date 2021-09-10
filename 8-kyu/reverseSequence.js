const reverseSeq = (n) => {
  let i = [];
  while (n > 0) {
    i.push(n);
    n--;
  }
  return i;

  // short solution
  // return Array(n).fill(0).map((e, i) => n - i );
};

console.log(reverse(5));
