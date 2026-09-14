const fs = require("node:fs");

let input = fs.readFileSync("./input.txt", { encoding: "utf-8" });
input = input.split("\n");

function findBiggestNumber(input, high) {
  let largestNumber = 0;

  high ??= input.length;

  for (let index = 0; index < high; index++) {
    if (input[index] > largestNumber) largestNumber = String(input[index]);
  }

  return largestNumber;
}

let total = 0;

for (let item of input) {
  item = String(item);

  const firstValue = findBiggestNumber(item, item.length - 1);
  const indexOfFirstValue = String(item).indexOf(firstValue);

  const secondValue = findBiggestNumber(
    item.slice(indexOfFirstValue + 1),
  );

  total += Number(`${firstValue}${secondValue}`);
}

console.log(total);
