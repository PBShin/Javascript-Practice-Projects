// Function that returns an array of objects taken from the collection array that include key-value pairs within the source object argument

function whatIsInAName(collection, source) {
  var arr = [];
  //console.log(Object.keys(collection));
  for (let obj of collection) {
  let check = true;
  for (let key of Object.keys(source)) {
    //console.log(source[key]);
    if (!(obj[key] === source[key])) {
      check = false;
    }
  }
  if (check) {
      arr.push(obj);
  }
  }
  //console.log(arr);
  return arr;
}
