const fs = require("node:fs");

let input = fs.readFileSync("./input.txt", { encoding: "utf-8" });
input = input.split(",");

let total = 0;

input.forEach((range) => {
  const rangeArray = range.split("-");

  let stringStart = String(rangeArray[0]);

  let start = Number(stringStart);
  const end = Number(rangeArray[1]);

  while (start <= end) {
    const firstSlice = stringStart.slice(0, stringStart.length / 2);
    const lastSlice = stringStart.slice(
      stringStart.length / 2,
      stringStart.length,
    );

    if (firstSlice === lastSlice) {
      total += start;
    }

    start++;
    stringStart = String(start);
  }
});

console.log(total);
