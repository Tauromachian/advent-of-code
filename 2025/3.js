const input = [
  987654321111111,
  811111111111119,
  234234234234278,
  818181911112111,
];

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
