const encryptThis = (text) =>
  text
    .split(" ")
    .map((word) =>
      word
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
        .replace(/^\w/, word.charCodeAt(0))
    )
    .join(" ");

// const encryptThis = (text) => {
//   if (text === "") {
//     return "";
//   } else {
//     let s = text.split(" ");
//     let x = s.map((element) => {
//       let a = element.split("");
//       a[0] = element.charCodeAt(0);
//       [a[1], a[a.length - 1]] = [a[a.length - 1], a[1]];
//       return a.join("");
//     });
//     return x.join(" ");
//   }
// };

console.log(encryptThis("Hello hi"));
console.log(encryptThis("A"), "65");
console.log(encryptThis("A wise old owl lived in an oak"));
