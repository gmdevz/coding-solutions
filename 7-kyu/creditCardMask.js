const maskify = (cc) => {
  return cc.length > 3
    ? cc.slice(0, cc.length - 4).replace(/./g, "#") + cc.slice(-4)
    : cc;

  // return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);

  // regex
  // return cc.replace(/.(?=....)/g, '#');
};

console.log(maskify("iy2"));
console.log(maskify("4556364607935616"));
