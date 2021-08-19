const arr = N => {
    let element = [];
    for (let i = 0; i < N; i++) {
        element.push(i);
    }
    return element;
    
};

/**
 * Second Solution
 */
// const arr = (n = 0) => [...Array(n).keys()];


console.log(arr(), []);
console.log(arr(4), [0,1,2,3]);