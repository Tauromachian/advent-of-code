const fs = require("node:fs");

let input = fs.readFileSync("./input.txt", { encoding: "utf-8" });
input = input.split("\n");

function rotate(barrel, amount, direction) {
  const isBarrelEntranceZero = barrel == 0;

  if (direction === "L") barrel = barrel - amount;
  else barrel = barrel + amount;

  if (isBarrelEntranceZero && barrel < 0) barrel = barrel + 100;

  let hasIntermediaryClick = false;

  if (barrel === 100) return { result: 0, hasIntermediaryClick };
  if (barrel === 0) return { result: 0, hasIntermediaryClick };

  if (barrel < 0) {
    hasIntermediaryClick = true;
    barrel = barrel + 100;
  } else if (barrel > 99) {
    hasIntermediaryClick = true;
    barrel = barrel - 100;
  }

  return { result: barrel, hasIntermediaryClick };
}

function ensureTwoDigits(value) {
  if (value > 99) {
    const amountOfClicks = Math.floor(value / 100);
    return { value: value % 100, amountOfClicks };
  }

  return { value, amountOfClicks: 0 };
}

/**
 * @param {string} value
 */
function getValueAndDirection(value) {
  const direction = value[0];
  const number = Number(value.slice(1));

  return { direction, number };
}

let barrel = 50;
let password = 0;

for (const item of input) {
  if (item == "") continue;

  const { direction, number } = getValueAndDirection(item);

  const { value, amountOfClicks } = ensureTwoDigits(number);
  password += amountOfClicks;

  const { result, hasIntermediaryClick } = rotate(
    barrel,
    value,
    direction,
  );

  barrel = result;

  if (!hasIntermediaryClick && barrel != 0) continue;

  password++;
}

console.log(password);
