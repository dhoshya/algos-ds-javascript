class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){
    let newNode  = new Node(val)
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      newNode.next = temp;
      this.first = newNode;
    }
    this.size++;
    return this.size;
  }

  pop(){
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      let temp = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      return temp;
    } else {
       let popped = this.first;
       let temp = this.first.next;
       popped.next = null;
       this.first = temp;
       this.size--;
       console.log(popped.value);
       return this.size;
    }
  }
}

// Stack using LinkedList - insertion and removal are O(1)
// searching or accessing are O(N)
