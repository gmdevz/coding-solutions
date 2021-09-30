function evenOrOdd(str) {
  const parity = {
    0: 0, // sum up even numbers
    1: 0, // sum up odd numbers
  };
  for (let i = 0; i < str.length; i++) {
    const currentElement = +str[i];
    parity[currentElement % 2] += currentElement; //returns 0 or 1 and adds in parity object
  }

  return parity[0] === parity[1]
    ? "Even and Odd are the same"
    : parity[0] > parity[1]
    ? "Even is greater than Odd"
    : "Odd is greater than Even";
}

console.log(evenOrOdd("12"), "Even is greater than Odd");
console.log(evenOrOdd("123"), "Odd is greater than Even");
console.log(evenOrOdd("112"), "Even and Odd are the same");
