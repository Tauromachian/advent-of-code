const input = [
  "11-22",
  "95-115",
  "998-1012",
  "1188511880-1188511890",
  "222220-222224",
  "1698522-1698528",
  "446443-446449",
  "38593856-38593862",
  "565653-565659",
  "824824821-824824827",
  "2121212118-2121212124",
];

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
