function removeDupsArray(A){
  let exists = {};
  let result = [];
  let element;

  for (let i = 0; i < A.length; i++) {
    element = A[i];
    if (!exists[element]) {
      exists[element] = true;
      result.push(element);
    }
  }

  return result;
}
