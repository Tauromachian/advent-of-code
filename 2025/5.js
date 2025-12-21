const input = [
  "3-5",
  "10-14",
  "16-20",
  "12-18",
  "",
  "1",
  "5",
  "8",
  "11",
  "17",
  "32",
];

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
