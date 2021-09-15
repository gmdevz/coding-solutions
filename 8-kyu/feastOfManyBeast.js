const feast = (beast, dish) => {
  // return (
  //   beast.split(" ").join("").slice(-1) ===
  //     dish.split(" ").join("").slice(-1) &&
  //   beast.split(" ").join("").charAt(0) === dish.split(" ").join("").charAt(0)
  // );

  // return (
  //   beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  // );

  // best solution
  return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1]);
};

console.log(feast("great blue heron", "garlic naan"), true);
console.log(feast("chickadee", "chocolate cake"), true);
console.log(feast("brown bear", "bear claw"), false);
