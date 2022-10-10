function moveToEnd(arr) {
 for(let i = 0; i< arr.length;i++){
   for(let j = 0; j < arr.length;j++){
    if(arr[i] === 0){
      swap(arr,j,j+1)
    }else{
      
    }
 }
}
return arr;
}
console.log(moveToEnd([1,0,2,0,3,0,7,0,5]))

function swap(arr,i,j){
 let temp = arr[i];
 arr[i] = arr[j];
 arr[j] = temp;
}