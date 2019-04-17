function selectionSort(arr) {

  for(let i = 0;i < arr.length: i++) {
    var min = i;
    for(let j = i+1; j < arr.length; j++){
      console.log(arr, arr[i],arr[j]);
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

// basically start out like a linear comparison, SELECT the  first element as the
// current minimum element(store the index value, 0th index).
// start comparison with 1st index, compare it to the current min.
// if true, set the value of current min to be the index value of j. After the
// execution of first inner loop, we have the min value. Then we swap this element
// with the element in the outer loop, which we had first selected as the minimum
//
// this algorithm sorts lowest to highest from L-R;
