function moveToEnd(arr) {
  let zeros = [];
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      numbers.push(arr[i]);
    }
  }
  arr= numbers.concat(zeros);
  return arr;
}

