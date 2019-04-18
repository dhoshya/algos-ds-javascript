class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class singlyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // O(1) time, pushes element to the end of the linkedlist
  push(val){
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail  = this.head;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }

  // O(n) time, pops off the last item in the LinkedList
  // traverse the entire list, find second last node and set it as tail and its
  // next to null;
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      let temp = current;
      while(current.next){
        temp = current;
        current = current.next;
      }
      console.log("value popped: ",current.val);
      console.log("new tail: ",temp.val);
      this.tail = temp;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }

  // shifts the linkedlist to the right, takes off the head of the list.
  // happens in O(1)
  shift(){
    if (!this.head) {
      return undefined;
    }
     let currHead = this.head;
     this.head = currHead.next;
     this.length--;
     if (this.length === 0) {
       this.tail = null;
     }
     return currHead;
  }

  // this method adds an element before the head and makes it the new head.
  // happens in O(1)
  unshift(val){
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
    newNode.next = this.head;
    this.head = newNode;
    }
    this.length++;
    return this;
  }

  // this is like the access index method of array. this happens in O(n)
  // you can call this method to get the element on the specified index
  get(index){
    if (index < 0 || index > this.length) {
      return undefined;
    }
     let count = 0;
     let getNode = this.head;
     while (count !== index) {
       getNode = getNode.next;
       count++;
     }
     return getNode;
  }

  // accepts position and value to set the item at that index
  // uses the get method to get the node at the index and we can update it's value
  set(index,val){
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      console.log(this.list);
      return true;
    }
    return false;
  }

  // this will insert the new node and its value at the specified index
  // it can make use of get, change the pointers and happens in O(1)
  // makes use of push to insert at end
  // makes use of unshift to insert at head
  insert(index, val){
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === this.length) {
      !!this.push(val);
    }
    if (index === 0) {
      !!this.unshift(val);
    }
    let newNode = new Node(val);
    let oldNode = this.get(index-1);
    newNode.next = oldNode.next;
    oldNode.next = newNode;
    this.length++;
    return true;
  }

  // takes in the index of the node to be removed
  // makes use of pop and shift
  // O(1) or O(N)
  remove(index){
    if (index < 0 || index >= this.length) {
      return undefined
    }
    if (index === this.length-1) {
      this.pop();
    }
    if (index === 0) {
      this.shift();
    }
    let previousNode = this.get(index-1);
    let removed = previousNode.next
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // a simple method to print the linkedlist
  print(){
    let arr=[];
    let currNode = this.head;
    while(currNode){
      arr.push(currNode.val);
      currNode = currNode.next;
    }
    console.log(arr);
  }

  // reverses and return the list
  // O(N)
  reverse(){
    let currNode = this.head;
    let next,
        prev = null;
    this.head = this. tail;
    this.tail = currNode;

    for (var i = 0; i < this.length; i++) {
      next = currNode.next;
      currNode.next = prev;
      prev = currNode;
      currNode = next;
    }
    return this;
  }

}

var list = new singlyLinkedList();
list.push("Hello");
list.push("Hi");
list.push("Rohan");
list.push("What");
list.push("Is");
