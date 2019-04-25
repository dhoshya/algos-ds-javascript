function mergeSorted(a,b){
  let result = [],
  aElem = a[0],
  bElem = b[0],
  i = 0,
  j = 0;

  if (a.length === 0) {
    return b;
  }

  if (b.length === 0) {
    return a;
  }

  while (aElem || bElem){
    if ((aElem && !bElem)||(aElem < bElem)) {
      result.push(aElem);
      aElem = a[i++];
    } else {
      result.push(bElem);
      bElem = b[j++];
    }
  }
  return result;
}
