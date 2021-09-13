const isPalindrome = (x) =>
  x.toLowerCase() === x.toLowerCase().split("").reverse().join("");

console.log(isPalindrome("dad"), true);
console.log(isPalindrome("Abba"), true);
