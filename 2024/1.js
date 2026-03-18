function bubbleSort(arr) {
  let tmp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

const firstList = [
  3,
  4,
  2,
  1,
  3,
  3,
];

const secondList = [
  4,
  3,
  5,
  3,
  9,
  3,
];

const sortedFirstList = bubbleSort(firstList);
const sortedSecondList = bubbleSort(secondList);

let distance = 0;

for (let i = 0; i < sortedFirstList.length; i++) {
  distance += sortedSecondList[i] - sortedFirstList[i];
}

console.log(distance);
