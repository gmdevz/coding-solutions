const sumMix = (x) => x.reduce((a, b) => +a + +b);

// x.reduce((a,b) => parseInt(a) + parseInt(b));

// x.map((a) => parseInt(a)).reduce((a, b) => a + b);

console.log(sumMix([9, 3, "7", "3"]), 22);
