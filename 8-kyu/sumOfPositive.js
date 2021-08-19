const positiveSum = (arr) => {
    let sum = 0;
    for(let x in arr) {
        if(arr[x] > 0) {
            sum += arr[x];
        }
    }
    return sum;

    /*Simpler Solution */
    // return arr.reduce((a,b) => a + (b > 0 ? b : 0), 0);
};



console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);