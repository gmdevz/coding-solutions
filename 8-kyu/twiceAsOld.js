const twiceAsOld = (dadYearsOld, sonYearsOld) => {
  // let son = sonYearsOld * 2;

  // return dadYearsOld > son ? dadYearsOld - son : son - dadYearsOld;
  return Math.abs(dadYearsOld - sonYearsOld * 2);
};

console.log(twiceAsOld(36, 7), 22);
console.log(twiceAsOld(55, 30), 5);
