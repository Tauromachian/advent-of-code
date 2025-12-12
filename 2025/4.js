const input = [
  [".", ".", "@", "@", ".", "@", "@", "@", "@", "."],
  ["@", "@", "@", ".", "@", ".", "@", ".", "@", "@"],
  ["@", "@", "@", "@", "@", ".", "@", ".", "@", "@"],
  ["@", ".", "@", "@", "@", "@", ".", ".", "@", "."],
  ["@", "@", ".", "@", "@", "@", "@", ".", "@", "@"],
  [".", "@", "@", "@", "@", "@", "@", "@", ".", "@"],
  [".", "@", ".", "@", ".", "@", ".", "@", "@", "@"],
  ["@", ".", "@", "@", "@", ".", "@", "@", "@", "@"],
  [".", "@", "@", "@", "@", "@", "@", "@", "@", "."],
  ["@", ".", "@", ".", "@", "@", "@", ".", "@", "."],
];

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

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === ".") continue;

    const adjacentRolls = countAdjacentRolls(input, i, j);

    if (adjacentRolls < 4) validRolls++;
  }
}

console.log(validRolls);
