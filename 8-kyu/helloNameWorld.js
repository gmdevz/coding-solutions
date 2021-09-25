// function hello(name) {
//   return name !== null && name === '' ? "Hello, World!" :`Hello, ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`;
// }

const hello = (name) => {
  return `Hello, ${
    name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"
  }!`;
};

console.log(hello("johN"));
console.log(hello("alice"));
console.log(hello(""));
