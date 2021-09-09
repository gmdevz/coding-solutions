function lastChair(N) {
  // TODO
  return N <= 2 ? N : N - 1;
}

console.log(lastChair(10), 9);

// 0   1   2   3   4   5   6   7   8   9
// 1 	2 	3 	4 	5 	6 	7 	8 	9 	10
// 1 	7 	5 	8 	3 	9 	4 	6 	10  2
