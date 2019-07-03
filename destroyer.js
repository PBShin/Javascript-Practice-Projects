// Function that removes all instances of the additional arguments within the array argument

function destroyer(arr, ...args) {
  for (let value of args) {
    while (arr.includes(value)) {
      arr.splice(arr.indexOf(value), 1);
    }
  }
  return arr;
}
