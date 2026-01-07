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

for (const problem of problems) {
  for (let i = 0; i < problem.length; i += 2) {
    operationStrings[i] += problem[i] + operations[i];
  }
}

for (const operationStringKey of Object.keys(operationStrings)) {
  const value = operationStrings[operationStringKey];

  operationStrings[operationStringKey] = value.slice(0, value.length - 1);
}

let result = 0;
Object.values(operationStrings).forEach((string) => {
  result += eval(string);
});

console.log(result);
