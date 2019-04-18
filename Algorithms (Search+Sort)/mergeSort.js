function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  console.log("left",left);
  let right = mergeSort(arr.slice(mid));
  console.log("right",right);
  return merge(left,right);
}

function merge(left,right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (right[j] > left[i]) {
      result.push(left[i]);
      i++;
      console.log("result: ",result);
    } else {
      result.push(right[j]);
      console.log("result: ",result);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    console.log(" extra length L result: ",result);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    console.log("extra length R result: ",result);
    j++;
  }
  return result;
}


 // the passed array is recursively split around its midpoint until there are
 // single element arrays
 // the initial split happens recursively till the left array is split into
 // single element array, similarly for the right side of the inital split
 //
 // the important aspect here is to merge these single element arrays. They are
 // compared with each other, and merged back up. All of this happens in-place.
