const swapVowelCase = (arr) => {
  return arr.replace(/[aeiou]/gi, (v) =>
    v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()
  );
};

console.log(swapVowelCase(" "), " ");
console.log(swapVowelCase("C Is AlIvE!"), "C is alive!");
console.log(swapVowelCase("to"), "tO");
console.log(swapVowelCase("The"), "ThE");
