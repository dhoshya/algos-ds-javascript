class HashTable {
  // default value set as a prime number owing to better functionality
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  // not a great "hash function" but enough to help me implement this table
  _hash(key){
    let total = 0;
    // making use of a prime # to help reducing collisions, to get a better Hash
    //
    const WEIRD_PRIME = 31;
    for(let i = 0; i< Math.min(key.length, 100); i++){
      let char = key[i];
      // get the alphabetic ranking of the character at ith index
      // without math.abs, it gives negative values
      let value = Math.abs(char.charCodeAt(0) - 96);
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  // implementation uses SEPARATE CHAINING to resolve collisions
  set(key,value){
    let hashedIndex = this._hash(key);
    if (!this.keyMap[hashedIndex]) {
      this.keyMap[hashedIndex] = [];
    }
    this.keyMap[hashedIndex].push([key,value]);
  }

  get(key){
    let hashedIndex = this._hash(key);
    if (this.keyMap[hashedIndex]) {
      for (let i = 0; i < this.keyMap[hashedIndex].length; i++) {
        if (this.keyMap[hashedIndex][i][0] === key) {
          return this.keyMap[hashedIndex][i][1];
        }
      }
    }
    return undefined;
  }

  // returns an array of all the keys in the hash table
  // does not return duplicates, gives the fisrt one
  keys(){
    let resultKeys = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if (this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++){
          if (!resultKeys.includes(this.keyMap[i][j][0])) {
            resultKeys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return resultKeys;
  }

  // crucial to handle duplicate data - most ignore dup and return it as single
  // before pushing in the results array check for dups
  values(){
    let resultValues = [];
    for(let i =0; i < this.keyMap.length; i++){
      if (this.keyMap[i]) {
        for(let j = 0; j< this.keyMap[i].length; j++){
          if (!resultValues.includes(this.keyMap[i][j][0])) {
            resultValues.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return resultValues;
  }

}

var ht = new HashTable(17);
ht.set("hello","hi");
ht.set("I","love");
ht.set("fast","cars");
ht.set("How","do");
ht.set("you","do");
ht.set("I'll","go");
ht.set("good night","take care");
