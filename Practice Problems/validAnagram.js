function isAnagram(str1, str2){
  let counter1 = {};
  let counter2 = {};

  for (letter of str1) {
    if (counter1[letter]) {
      counter1[letter]++;
    } else {
      counter1[letter] = 1;
    }
  }

  for (letter of str2) {
    if (counter2[letter]) {
      counter2[letter]++;
    } else {
      counter2[letter] = 1;
    }
  }

  for (let key of Object.keys(counter1)) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }
  return true;
}
