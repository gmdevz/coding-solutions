function updateLight(current) {
  //your code here!
  switch (current) {
    case "green":
      // code block
      return "yellow";
      break;
    case "yellow":
      // code block
      return "red";
      break;
    default:
      // code block
      return "green";
  }
}

console.log(updateLight("green"), "yellow");
console.log(updateLight("yellow"), "red");
console.log(updateLight("red"), "green");
