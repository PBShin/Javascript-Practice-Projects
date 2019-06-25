// Function to find index to insert number (argument 2) into array (argument 1)

function getIndexToIns(arr, num) {
  arr=arr.sort((a, b) => a-b);
  console.log(arr);
  if (num > arr[arr.length-1]) {
      console.log("case1");
      var num=arr.length;
  } else if (!arr.length) {
    console.log("case2");
    var num=0;
  } else {
    for (let i=0; i<arr.length; i++) {
      console.log(i);
      console.log(arr[arr.length-1]);
      if (num>arr[i]) {
        console.log("case3 @:"+i);
        continue;
      } else {
        console.log("case4 @:"+i);
        var num=i;
        break;
      }
    }
  }
  return num;
  console.log(num);
}
