// Function that translate string to Pig Latin

function translatePigLatin(str) {
  str=str.toLowerCase();
  //console.log(str);
  let vowelRegex=/^[aeiou].*/;
  if (str.match(vowelRegex)) {
    console.log("vowel");
    str=str+"way";
  } else {
    console.log("cons");
    let letter = str.slice[0];
    str=str.slice(1)+letter+"ay";
  }
  return str;
}

translatePigLatin("consonant");
//console.log(translatePigLatin(str));
