import fs from "node:fs";

let input = fs.readFileSync("./input.txt", { encoding: "utf-8" });
const inputs = input.split("\n");
const list = inputs.filter((item: string | undefined): item is string =>
  !!item
);

const MAX_COUNT = 12;

let total = 0;

function findMaxNumber(batteries: number[], low: number, high: number): number {
  let largestNumber = 0;
  let largestNumberIndex = -1;

  for (let i = low; i < high; i++) {
    if (largestNumber < batteries[i]) {
      largestNumber = batteries[i];
      largestNumberIndex = i;
    }
  }

  return largestNumberIndex;
}

function assemble(array: Array<number | undefined>): number {
  let numberString = "";
  for (const value of array) {
    if (value != null) numberString += value;

    if (numberString.length >= MAX_COUNT) break;
  }

  return Number(numberString);
}

function backtrack(
  batteries: number[],
  values: Array<number | undefined>,
  start: number,
) {
  let index = start;
  let largestNumber = 0;
  let largestNumberIdx = 0;

  while (values[index]) index--;

  while (!values[index]) {
    if (largestNumber <= batteries[index]) {
      largestNumber = batteries[index];
      largestNumberIdx = index;
    }

    index--;
  }

  return largestNumberIdx;
}

for (let batteriesString of list) {
  const batteries = batteriesString.split("").map((
    battery: string,
  ) => Number(battery));
  let values = new Array(batteries.length);

  let found = 0;
  let low = 0;
  let high = batteries.length;
  let pivot = 0;

  while (found < MAX_COUNT) {
    let largestNumberIndex = findMaxNumber(
      batteries,
      low,
      high,
    );
    let largestNumber = batteries[largestNumberIndex];

    if (largestNumberIndex < 0) {
      largestNumberIndex = backtrack(batteries, values, pivot);
      largestNumber = batteries[largestNumberIndex];
    }

    if (!values[largestNumberIndex]) found++;

    values[largestNumberIndex] = largestNumber;

    if ((batteries.length - 1) - largestNumberIndex < MAX_COUNT - found) {
      low = pivot + 1;
      high = largestNumberIndex;
    } else {
      pivot = largestNumberIndex;

      low = largestNumberIndex + 1;
      high = batteries.length;
    }
  }

  const batteriesPower = assemble(values);

  total += Number(batteriesPower);
}

console.log("\n");
console.log(total);
