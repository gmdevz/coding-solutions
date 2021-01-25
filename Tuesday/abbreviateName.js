// const abbrevName = (name) => {
//     const n = name.split(' ');

//     // code away
//     return n.map((n) => n[0]).join('.').toUpperCase();

// };

/**
 * Second Solution
 */

const abbrevName = (name) => name.split(' ').map(n => n.substr(0,1).toUpperCase()).join('.');



console.log(abbrevName('Sam Harris'), 'S.H');
console.log(abbrevName('Patrick Feenan'), 'P.F');
console.log(abbrevName('Evan Cole'), 'E.C');
console.log(abbrevName('P Favuzzi'), 'P.F');
console.log(abbrevName('David Mendieta'), 'D.M');