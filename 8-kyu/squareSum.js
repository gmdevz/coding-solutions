const squareSum = (numbers) => numbers
    .reduce((sum,num) => sum + (num * num), 0);


/**
 * Second Solution
 */
// const squareSum = (numbers) => numbers
//     .map(n => n**2)
//     .reduce((result,nextNum) => result+nextNum,0);

console.log(squareSum([]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([13,0,13,0]), 338);