function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr=[];
  let index=0;
  let count=0;
  console.log(Math.ceil(arr.length/size));
  while (count<Math.ceil(arr.length/size)) {
    console.log(arr.slice(index,size));
    let group = arr.slice(index, size);
    console.log(group);
    newArr.push(group);
    count++;
    index+=size;
  }

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
