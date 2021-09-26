function fixTheMeerkat(arr) {
  //your code here
  // [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
  //  return arr
  return arr.reverse();
}

console.log(fixTheMeerkat(["tail", "body", "head"]));
