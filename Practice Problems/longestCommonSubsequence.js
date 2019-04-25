function lcs(a, b) {
  let aSub = a.substr(0, a.length - 1);
  let bSub = b.substr(0, b.length - 1);

  if (a.length === 0 || b.length === 0) {
    return '';
  } else if (a.charAt(a.length - 1) === b.charAt(b.length - 1)) {
    return lcs(aSub, bSub) + a.charAt(a.length - 1);
  } else {
    let x = lcs(a, bSub);
    let y = lcs(aSub, b);
    return (x.length > y.length) ? x : y;
  }
}
