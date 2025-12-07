const input = [
  987654321111111,
  811111111111119,
  234234234234278,
  818181911112111,
];

function findBiggestNumberThatIsNotLastNumber(input) {
  let largestNumber = 0;

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] > largestNumber) {
      largestNumber = Number(input[i]);
    }
  }

  return largestNumber;
}

function findBiggestNumber(input) {
  let largestNumber = 0;

  for (const char of input) {
    if (char > largestNumber) {
      largestNumber = Number(char);
    }
  }

  return largestNumber;
}

let total = 0;

for (const item of input) {
  const firstValue = findBiggestNumberThatIsNotLastNumber(String(item));

  const indexOfFirstValue = String(item).indexOf(firstValue);

  const secondValue = findBiggestNumber(
    String(item).slice(indexOfFirstValue + 1),
  );

  total += Number(`${firstValue}${secondValue}`);
}

console.log(total);
