const fs = require("node:fs");

let input = fs.readFileSync("./input.txt", { encoding: "utf-8" });
input = input.split(",");

function hasRepeatedPatterns(value) {
  const string = String(value);
  const stopNumber = Math.floor(string.length / 2);

  let pattern = "";
  while (pattern.length < stopNumber) {
    pattern = string.slice(0, pattern.length + 1);
    const regex = new RegExp(pattern, "g");

    const arrayMatch = string.match(regex);
    if (arrayMatch.length * pattern.length === string.length) return true;
  }

  return false;
}

var total = 0;
for (const range of input) {
  const rangeArray = range.split("-");

  let stringStart = String(rangeArray[0]);

  let start = Number(stringStart);
  const end = Number(rangeArray[1]);

  while (start <= end) {
    const hasPatterns = hasRepeatedPatterns(stringStart);

    if (hasPatterns) total += start;

    start++;
    stringStart = String(start);
  }
}

console.log(total);
