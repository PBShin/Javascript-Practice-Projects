// Function to break up array into an group of arrays within a larger array. The number of values in the array will correspond to the size argument

function chunkArrayInGroups(arr, size) {
  let newArr=[];
  let index=0;
  let count=0;
  console.log(Math.ceil(arr.length/size));
  while (count < (Math.ceil(arr.length/size))) {
    let group = arr.slice(index, index+size);
    newArr.push(group);
    count++;
    index+=size;
  }

  return newArr;
}
