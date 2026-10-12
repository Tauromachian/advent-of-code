const fs = require("node:fs");

let input = fs.readFileSync("./input.txt", { encoding: "utf-8" });
input = input.split("\n");

const indexOfBlankLine = input.indexOf("");

const ranges = input.slice(0, indexOfBlankLine);
const ids = input.slice(indexOfBlankLine + 1, input.length);

let availableIngredientsCounter = 0;

for (const id of ids) {
  for (const range of ranges) {
    const rangesArray = range.split("-");

    if (Number(rangesArray[0]) <= id && Number(id) <= rangesArray[1]) {
      availableIngredientsCounter++;
      break;
    }
  }
}

console.log(availableIngredientsCounter);
