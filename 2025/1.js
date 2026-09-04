const fs = require("node:fs");

let input = fs.readFileSync("./1.input.txt", { encoding: "utf-8" });
input = input.split("\n");

function rotateLeft(barrel, amount) {
  const result = barrel - amount;

  if (result === 100) return 0;
  if (result < 0) return 100 + result;

  return result;
}

function rotateRight(barrel, amount) {
  const result = barrel + amount;

  if (result === 100) return 0;
  if (result > 100) return result - 100;

  return result;
}

function ensureTwoDigits(value) {
  if (value > 99) return value % 100;

  return value;
}

(function start() {
  let password = 0;
  let barrel = 50;

  for (const item of input) {
    if (item.includes("L")) {
      const number = Number(item.replace("L", ""));
      barrel = rotateLeft(barrel, ensureTwoDigits(number));
    }

    if (item.includes("R")) {
      const number = Number(item.replace("R", ""));
      barrel = rotateRight(barrel, ensureTwoDigits(number));
    }

    if (barrel == 0) password++;
  }

  console.log(password);
})();
