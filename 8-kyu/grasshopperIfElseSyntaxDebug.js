// function checkAlive (health) {
//   if ( health <= 0) {
//     return false
//   } else  {
//     return true
//   }
// }

const checkAlive = (health) => (health <= 0 ? false : true);

console.log(checkAlive(5), true);
console.log(checkAlive(0), false);
