const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length;

/**
 * Second Solution
 */
// const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(x => x).length;
let array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

console.log(countSheeps(array1));
  
console.log(countSheeps(array1) == 17, 'There are 17 sheeps in total');