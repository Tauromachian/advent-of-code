const fs = require("node:fs");

let input = fs.readFileSync("./input.txt", { encoding: "utf-8" });
const inputs = input.split("\n").map((item) => item.split(""));

function countAdjacentRolls(input, i, j) {
  let adjacentRolls = 0;

  const adjacentCoordinates = [
    { i: 0, j: 1 },
    { i: 1, j: 1 },
    { i: 1, j: 0 },
    { i: 1, j: -1 },
    { i: 0, j: -1 },
    { i: -1, j: -1 },
    { i: -1, j: 0 },
    { i: -1, j: 1 },
  ];

  for (const coordinate of adjacentCoordinates) {
    if (input?.[i + coordinate.i]?.[j + coordinate.j] === "@") adjacentRolls++;
  }

  return adjacentRolls;
}

let validRolls = 0;

for (let i = 0; i < inputs.length; i++) {
  for (let j = 0; j < inputs[i].length; j++) {
    if (inputs[i][j] === ".") continue;

    const adjacentRolls = countAdjacentRolls(inputs, i, j);

    if (adjacentRolls < 4) validRolls++;
  }
}

console.log(validRolls);
