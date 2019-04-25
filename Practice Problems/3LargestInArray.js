// given an array, write a function to find three largest elements

function test (arr){
  // let result = [];
  // let len = arr.length;
  // let largest = arr[0],
  //     second = 0,
  //     third = 0;
  //
  // for (var i = 0; i < arr.length; i++) {
  //   if(largest < arr[i]){
  //     largest = arr[i];
  //   }
  //   if (largest > arr[i] && second < arr[i]) {
  //     second = arr[i]
  //   }
  //   if (second > arr[i] && third < arr[i]) {
  //     third = arr[i]
  //   }
  // }
  // result.push(largest);
  // result.push(second);
  // result.push(third);
  //
  // return result

  // Optimized version
  let maxThree = [Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE]

  for (var i = 0; i < arr.length; i++) {
    if (maxThree[0] < arr[i]) {
      maxThree[2] = maxThree[1];
      maxThree[1] = maxThree[0];
      maxThree[0] = arr[i];
    } else if (maxThree[1] < arr[i]) {
      maxThree[2] = maxThree[1];
      maxThree[1] = arr[i];
    } else if (maxThree[2] < arr[i]){
      maxThree[2] = arr[i];
    }
  }
  return maxThree;
}


// [10,5,2,78,12,34]
// [78,43,12]
