//Selection Sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    swap(arr, i, minIdx);
  }
  return arr;
}
console.log(selectionSort([64, 25, 12, 22, 11]));
//helper function swap
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
