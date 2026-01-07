const problems = [
  [123, " ", 328, " ", 51, " ", 64],
  [45, " ", 64, " ", 387, " ", 23],
  [6, " ", 98, " ", 215, " ", 314],
  ["*", " ", "+", " ", "*", " ", "+"],
];

const operationStrings = {};
const operations = {};

const operationsRow = problems.pop();
for (let i = 0; i < operationsRow.length; i += 2) {
  operations[i] = operationsRow[i];
  operationStrings[i] = "";
}

for (let i = 0; i < problems.length; i++) {
  const problem = problems[i];

  for (let j = 0; j < problem.length; j += 2) {
    if (i === problems.length - 1) {
      operationStrings[j] += problem[j];
      continue;
    }
    operationStrings[j] += problem[j] + operations[j];
  }
}

let result = 0;
Object.values(operationStrings).forEach((string) => {
  result += eval(string);
});

console.log(result);
