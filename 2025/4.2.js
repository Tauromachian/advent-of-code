const fs = require("node:fs");

let input = fs.readFileSync("./input.txt", { encoding: "utf-8" });
const matrix = input.split("\n").map((item) => item.split(""));

function countAdjacentRolls(matrix, i, j) {
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
    if (
      matrix?.[i + coordinate.i]?.[j + coordinate.j] === "@" ||
      matrix?.[i + coordinate.i]?.[j + coordinate.j] === "*"
    ) adjacentRolls++;
  }

  return adjacentRolls;
}

function removeValid(matrix) {
  let valids = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] !== "*") continue;

      matrix[i][j] = ".";
      valids++;
    }
  }

  return valids;
}

let validsAmountInThisTurn = 0;
let validRolls = 0;

do {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === ".") continue;

      const adjacentRolls = countAdjacentRolls(matrix, i, j);

      if (adjacentRolls < 4) {
        validRolls++;
        matrix[i][j] = "*";
      }
    }
  }

  validsAmountInThisTurn = removeValid(matrix);
} while (validsAmountInThisTurn > 0);

console.log(validRolls);
