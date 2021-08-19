const getMiddle = (s) => s.length % 2 === 0 ?  s.substr(s.length/2 -1, 2) : s.substr(s.length/2,1);


/**
 * Second solution
 */
// const getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);
// const getMiddle = (s) => s.slice((s.length-1)/2, s.length/2+1);

console.log(getMiddle('test'),'es');
console.log(getMiddle('testing'),'t');
console.log(getMiddle('middle'),'dd');
console.log(getMiddle('A'),'A');