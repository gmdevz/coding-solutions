const solution = (str, ending) => str.endsWith(ending);

console.log(solution("abc", "bc"), true);
console.log(solution("abcde", "abc"), false);
