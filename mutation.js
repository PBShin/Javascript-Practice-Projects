// Function that checks if all the letters in the second word of the array appear within the first word

function mutation(arr) {
  let word = arr[1].toLowerCase();
  let check = arr[0].toLowerCase();
  for (let letter of word) {
    if (check.includes(letter)) {
      arr=true;
    } else {
      arr= false;
      break;
    }
  }
  return arr;
  console.log(arr);
}
