class Node{
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
     this.root = null;
  }

  insert(value){
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let curr = this.root;
      while(true){
        if (value < curr.value) {
          if (curr.left === null) {
            curr.left = newNode;
            return this;
          } else {
            curr = curr.left;
          }
        } else if (value > curr.value) {
          if (curr.right === null) {
            curr.right = newNode;
            return this;
          } else {
            curr = curr.right;
          }
        }
      }
    }
  }

  // returns true or false depending upon the result
  contains(value){
    if (!this.root) {
      return null;
    }
    let curr = this.root;
      while (curr) {
        if (value < curr.value) {
          curr = curr.left;
        } else if (value > curr.value){
          curr = curr.right;
        } else {
          return true;;
        }
      }
    return false;
  }
}
