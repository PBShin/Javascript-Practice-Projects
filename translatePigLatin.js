function translatePigLatin(str) {
  str=str.toLowerCase();
  //console.log(str);
  let vowelRegex=/^[aeiou].*/;
  if (str.match(vowelRegex)) {
    console.log("vowel");
    str=str+"way";
  } else {
    let consRegex = /^([^aeiou]+)(.*)$/;
    let matches = str.match(consRegex);
    console.log(matches);
    let cons = matches[1];
    console.log("cons");
    str=str.slice(cons.length)+cons+"ay";
  }
  return str;
}

translatePigLatin("consonant");
console.log(translatePigLatin("consonant"));
