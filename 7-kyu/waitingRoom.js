function lastChair(N) {
  // TODO
  let n = [];

  for (let i = 1; i <= N; i++) {
    n.push(i);
  }

  return n.filter((x) => x % 2 != 0);
}

console.log(lastChair(10));
