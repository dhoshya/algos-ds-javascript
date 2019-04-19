// here we add to the tail and remove from the head
// enqueue 1,2,3,4,5
// 1->2->3->4->5
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // adding elements from the tail
  enqueue(val){
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  // removing from the head
  dequeue(){
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.last === this.first) {
      this.last = null;
    }
    this.first = this.first.next;
    temp.next = null;
    this.size--;
    console.log(temp);
    return this;
  }
}

// insertion and removal O(1)
// searching and accesssing O(N)
