const cockroachSpeed = (s) => (s >= 0 ? Math.floor(s / 0.036) : s);

console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);
