// Function that scans 2 array arguments and return a new array of all values that aren't shared by both arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  for (let value of arr1){
    if (!arr2.includes(value)){
      newArr.push(value);
    }
  }
  for (let value of arr2) {
    if (!arr1.includes(value)){
      newArr.push(value);
    }
  }
  return newArr;
}
