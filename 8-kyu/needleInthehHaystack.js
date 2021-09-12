const findNeedle = (haystack) => {
  return haystack.includes("needle")
    ? `found the needle at position ${haystack.indexOf("needle")}`
    : "no needle found";
};

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
