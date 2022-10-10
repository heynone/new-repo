// bubble sort 
function bubbleSort(arr) {
  if (arr.length === 1 || arr.length === 0) return arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}
//helper function swap
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
