const duplicateCount = (text) => {
  const result = [];
  const strArr = text
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .match(/(.)\1+/g);

  if (strArr != null) {
    strArr.forEach((elem) => {
      result.push(elem[0]);
    });
  }
  return result.length;
};

console.log(duplicateCount("aabbcde"));
