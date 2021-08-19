
// First
const solution = (arr) => arr.split('').reverse().join('');


/**
 * Second Solution
 */
// const solution = (arr) => {
//     return (arr=== '') ? '' : solution(arr.substr(1)) + arr.charAt(0);

// };


console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');