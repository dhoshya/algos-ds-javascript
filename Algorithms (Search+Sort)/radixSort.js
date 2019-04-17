
// returns the individual digit from the number corresponding to the position
function getDigit(num, position){
  return Math.floor(Math.abs(num) / Math.pow(10,position)) % 10;
}

// returns the # of  digits in the number that is passed as args
function digitCount(num){
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// counts the  # of digits of every number and returns the  max number of
// digits in an array of numbers
function mostDigits(array){
  let maxDigits = 0;
  for (var i = 0; i < array.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(array[i]));
  }
  return maxDigits;
}

function radixSort(arr){
   let maxDigitCount = mostDigits(arr);
   console.log(maxDigitCount);

   for (let k = 0; k < maxDigitCount; k++) {
     let digitBukets = Array.from({length: 10}, () => []);

     for(let i = 0; i < arr.length; i++){
           let digit = getDigit(arr[i],k);
           digitBukets[digit].push(arr[i]);
     }
     arr = [].concat(...digitBukets);
   }
   return arr;
}
