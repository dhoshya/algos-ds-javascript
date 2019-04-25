function findAllPrimes(A){
  let result = [];
  for(let i = 0; i < A.length; i++){
    if (isPrime(A[i])) {
      result.push(A[i]);
    }
  }
  function isPrime(n){

    let divisor = 3;
    let limit = Math.sqrt(n);
    if (n ===2 || n===3) {
      return true;
    }
    if (n%2 === 0 ) {
      return false;
    }

    while(divisor < limit){
      if (n % divisor === 0) {
        return false;
      }
    }
    return true;
  }

  return result;
}
