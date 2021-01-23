const squareDigits = num => {
    let strNum = String(num);
    let result = '';

    for (let i in strNum) {
        let squared = strNum[i] ** 2;
        result += squared;
    }

    return parseInt(result);

    /**
     * Second Solution
     */
    // return +num.toString().split('').map(i => i*i).join('');
};


console.log(squareDigits(9119), 811181);
