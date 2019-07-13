//Function to replace a word within a string argument with a new word. The new word's first letter must match the 
//case of the old word's first letter

function myReplace(str, before, after) {
  let regex = before
  //console.log(before.charAt(0));
  if (before.charAt(0) == before.charAt(0).toUpperCase()) {
    //console.log("caseA");
    if (after.charAt(0) == after.charAt(0).toLowerCase()) {
      after=after.charAt(0).toUpperCase()+after.slice(1);
    }
  } else {
    //console.log("caseB");
    if (after.charAt(0) == after.charAt(0).toUpperCase()) {
      after=after.charAt(0).toLowerCase()+after.slice(1);
    }
  }
  //console.log(after);
  str=str.replace(regex, after);
  return str;
  //console.log(str);
}
