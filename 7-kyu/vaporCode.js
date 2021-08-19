function vaporcode(string) {
  return string.toUpperCase().replace(/\s/g, "").split("").join("  ");
}
console.log(vaporcode("Let's go to the movies"));
console.log(vaporcode("Why isn't my code working?"));
