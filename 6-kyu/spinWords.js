function spinWords(string) {
  //TODO Have fun :)
  return string
    .split(" ")
    .map((s) => (s.length > 4 ? s.split("").reverse().join("") : s))
    .join(" ");
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
