const accum = (s) => {
  // let res = [];
  // for(let i = 0; i < s.length; i++){
  //    res.push( s[i].repeat(i+1));
  //   };
  //   return res.map(a => a.charAt(0).toUpperCase() + a.substr(1)).join('-')

  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
};

console.log(accum("abc"));
console.log(accum("cwAt"));
