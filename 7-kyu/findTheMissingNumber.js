const missingNo = (nums) => {
  // Number(
  //   Array.from(Array(Math.max(...nums)).keys())
  //     .map((n, i) => (nums.indexOf(i) < 0 ? i : null))
  //     .filter((f) => f)
  // );

  // Number(
  //   Array.from(Array(Math.max(101)).keys())
  //     .map((n, i) => (nums.indexOf(i) < 0 ? i : null))
  //     .filter((f) => f)
  // );

  for (i = 0; i <= 100; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
};

console.log(
  missingNo([
    8, 67, 74, 61, 90, 94, 19, 86, 27, 43, 64, 14, 38, 92, 78, 54, 28, 98, 71,
    63, 18, 48, 69, 31, 88, 66, 24, 11, 50, 77, 33, 13, 60, 62, 96, 85, 3, 40,
    75, 72, 7, 17, 95, 4, 44, 45, 42, 15, 26, 36, 5, 12, 46, 89, 9, 35, 80, 79,
    55, 68, 65, 2, 58, 73, 21, 25, 99, 82, 6, 53, 70, 29, 41, 0, 23, 32, 10, 49,
    83, 51, 37, 39, 93, 57, 34, 20, 76, 97, 59, 84, 87, 22, 16, 56, 47, 30, 91,
    1, 81, 52,
  ])
);
