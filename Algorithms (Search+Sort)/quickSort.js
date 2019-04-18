 function quickSort(arr, left = 0, right = arr.length-1) {

   if (left < right) {
     let pivotIndex = pivot(arr,left,right);
     //left
     quickSort(arr,left,pivotIndex-1);
     //right
     quickSort(arr,pivotIndex+1,right);
   }
   return arr;
 }

 function pivot(arr, start = 0, end = arr.length-1){
   //ES6 swap
   const swap = (arr, idx1, idx2) => {
     [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
   };

   //assuming pivot is always the first element
   let pivot = arr[start];
   let swapIdx = start;

   for( let i = 1; i <= end; i++){
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr,swapIdx,i);
    }
   }
   // swap pivot from the start to the swapPoint
   swap(arr, start, swapIdx);
   return swapIdx;
 }


 // The passeed array is split recursively around a pivotIndex. the  pivot method
 // is cruicial to the working of this important.
 // the pivot method takes in the array, a left and a right index to work on. It
 // works on the array , assumes the pivot is always the first index and finds the
 // elements smaller to it.
 // a count is kept of the numbner of elements smaller and the pivot is then swapped
 // to that index.  this index is then returned and recursive calls are made on the
 // left and right of the pivot.
