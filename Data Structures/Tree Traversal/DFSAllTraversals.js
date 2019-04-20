// BST are special kind of trees where they have all the properties of a
// binary tree but with a special condition that left < root and right > root
// 2x number of nodes = 1 Extra Step
// insertion and searching O(log N) - avg and best case
// for worst case, O(N) - if there is an ascending tree / descending tree
// in such cases - either do not use a BST or choose a different root



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

  // this implementation is using a queue constructed from arrays where we use
  // shift and pop to emulate aqueue.
  // at each iteration, a parent node is added to the queue - if it has left/right
  // they are added to the queue and the parent is shifted to the result array
  // which finally results in a BFS traversal (lists all the parents first
  // according to the level)

  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    //evaluates to a truthy value
    while (queue.length) {
      // take from the beginning of the queue
      node = queue.shift();

      // add the node to the visited data array
      data.push(node.value);
      // check for children, if yed, add to the queue
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }

  // DFS: PreOrder:
  DFSPreOrder(){
    let data = [];
    let current = this.root;

    function traverse(node){
      data.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

    }
    traverse(current);
    return data;
  }

  // DFS: PostOrder
  DFSPostOrder(){
    let data = [];
    let current = this.root;

    function traverse(node){

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  // DFS: PreOrder:
  DFSInOrder(){
    let data = [];
    let current = this.root;

    function traverse(node){
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);

    }
    traverse(current);
    return data;
  }
}

var bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
