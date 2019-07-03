// Function that takes in 2 value array argument and sums both values, as well as all numbers in between, of the array.

function sumAll(arr) {
  arr=arr.sort((a, b)=> a-b);
  let start = arr[0];
  let end = arr[1];
  let rangeFunc = (start, end) => Array.from({length:(end-start)}, (v, k) => k+start);
  let range = rangeFunc(start, end+1);
  let sum =0;
  for (let num of range) {
    sum+=num;
  }
  return sum;
}
