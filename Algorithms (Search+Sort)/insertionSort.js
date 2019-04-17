function insertionSort(arr){
  for(var i = 1; i < arr.length; i++){
    var currentVal = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
      arr[j+1] = arr[j];
      console.log(arr);
      console.log("i:",arr[i]);
      console.log("j:",arr[j]);
      console.log("j+1:",a[j+1]);
    }

    // found the currect spot to insert currentVal
    // move it to j+1 th index
    arr[j+1] = currentVal;
    console.log(currentVal);
  }
  return arr;
}


// we maintain logical partitions - assuming 0th index is in the sorted partiion
// and rest all are unsorted hence the outer loop starts from i = 1
// in each iteration of inner loop we take the smallest and insert it in the
// sorted partition, and while we do that we traverse the sorted partition from
// R-L
//
// effectively  there is no swapping, we just copy values from unsorted partition
// to the sorted partion and move everything else to the right
