// Function that converts strings to "Title Case"

function titleCase(str) {
  let arr = str.split(" ");
  let newArr=[];
  console.log(arr);
  for (let word of arr) {
    console.log(word);
    let firstLetter = word[0];
    firstLetter = firstLetter.toUpperCase();
    console.log(firstLetter);
    let restArr=[];
    for (let i=1; i<word.length; i++) {
      let letter = word[i];
      letter = letter.toLowerCase();
      restArr.push(letter);
    }
    let rest = restArr.join("");
    word = firstLetter+rest;
    newArr.push(word);
    console.log(newArr);
  }
  str = newArr.join(" ");
  console.log(str);
  return str;
}
