class HashTable {
  constructor (size=53){
    this.keyMap = new Array(size);
  }

  _hash(key){
    let total = 0;
    const WEIRD_PRIME = 31;

    for(let i = 0; i < Math.min(key.length,100); i++){
      let char  = key[i];
      let value = Math.abs(char.charCodeAt(0)-96);
      total = (total * WEIRD_PRIME+value) % this.keyMap.length;
    }
    return total;
  }

  set(key,value){
    let hashedIndex = this._hash(key);

    if (!this.keyMap[hashedIndex]) {
      this.hashedIndex = []
    }
    this.keyMap[hashedIndex].push([key,value]);
  }

  get(key){
    let hashedIndex = this._hash(key);
    if (this.keyMap[hashedIndex]) {
      for (var i = 0; i < this.keyMap[hashedIndex].length; i++) {
        if(this.keyMap[hashedIndex][i][0] === key ){
          return this.keyMap[hashedIndex][i][1];
        }
      }
    }
    return undefined;
  }
}
