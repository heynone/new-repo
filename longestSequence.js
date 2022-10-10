// Given an integer array, find the maximum length contiguous subarray having a given sum.

// Input : nums[] = [5, 6, -5, 5, 3, 5, 3, -2, 0], target = 8
// Output: [-5, 5, 3, 5]
// Explanation: The subarrays with sum 8 are [[-5, 5, 3, 5], [3, 5], [5, 3]]. The longest subarray is [-5, 5, 3, 5] having length 4.

function subarray(arr, targetSum) {
  let array = [];
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(!array.includes(arr[i])){
        array.push(arr[i])
    }else{}
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] + array[j] === 0 || array[i] + array[j] === targetSum) {
        result.push(array[i], array[j]);
      }else{}
    }
  }
  return result;
}
console.log(subarray([5, 6, -5, 5, 3, 5, 3, -2, 0], 8));

// the following problem is working fine