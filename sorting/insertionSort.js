

function insertionSort(arr) {
  if (arr.length === 1 || arr.length === 0) return arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, j, i);
      }
    }
  }
  return arr;
}
console.log(insertionSort([64, 25, 12, 22, 11]))
//helper function swap
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
