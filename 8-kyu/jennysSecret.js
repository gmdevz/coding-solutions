// function greet(name){
//   if(name === "Johnny")
//   return "Hello, my love!";
//   return "Hello, " + name + "!";
// }

const greet = (name) =>
  name === "Johnny" ? `Hello, my love!` : `Hello, ${name}!`;

console.log(greet("Jim"), "Hello, Jim!");
console.log(greet("Jane"), "Hello, Jane!");
console.log(greet("Simon"), "Hello, Simon!");
console.log(greet("Johnny"), "Hello, my love!");
