// Function that takes in two arrays and an index as inputs. The first array is inserted into the second array starting at index n

function frankenSplice(arr1, arr2, n) {
  let beginning = arr2.slice(0,n);
  console.log(beginning);
  let end = arr2.slice(n,arr2.length);
  console.log(end);
  arr2=beginning.concat(arr1).concat(end);
  console.log(arr2);
  return arr2;
}
