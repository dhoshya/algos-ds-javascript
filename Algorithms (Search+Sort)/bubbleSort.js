function bubbleSort(arr) {

  let noSwaps = true;
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i-1; j++) {
      console.log(arr, arr[j],arr[j+1]);

      if (arr[j] > arr[j+1]) {
        //SWAP!
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return arr;
}


// we are setting i equal to the end of the array so that it can limit the
// sorted partion.
// The large value are bubbled to the right of the array and thus
// need not be sorted.
// noSwaps variable is helping us limit the number of swaps needed at the end
// of the array which is already sorted.

// this algorithm sorts the array such that  largest is always at the end so
// something like it is sorted descending from R-L
