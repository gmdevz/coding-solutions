const generateColor = function () {
  // show em the code!
  return "#" + Math.random().toString(16).slice(2, 8);
};

console.log(
  (generateColor().substring(0, 1), "#", "should start with the symbol #")
);

console.log(generateColor());
