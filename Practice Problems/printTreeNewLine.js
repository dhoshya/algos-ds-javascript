class Node{
  constructor(value){
    this.root = value;
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
    } else{
      let current = this.root;
      while (true) {
        if (value < current.value ) {
          if (current.left === null) {
            current.left = newNode;
          } else {
            current = current.left;
            return this;
          }
        } else if (value > current.value){
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  printLevels(){
    let result = [];
    currentLevelNodes = [];
    if(root)
        currentLevelNodes.push(root);
    while(currentLevelNodes.length > 0) {
        current = [];
        let len = currentLevelNodes.length;
        for (let i = 0; i< len; i++) {
            let node = currentLevelNodes.shift();
            current.push(node.val);
            if(node.left) {
                currentLevelNodes.push(node.left);
            }
            if(node.right) {
                currentLevelNodes.push(node.right);
            }
        }
        console.log(current);
        result.push(current);
    }
    return result;
  }

  let result = [];
  let currentLeaveNodes = [];

  if (root) {
    currentLeaveNodes.push(root)
  }

  while (currentLeaveNodes.length > 0) {
    let current =[]
    let len = currentLeaveNodes.length;
    for (var i = 0; i < len; i++) {
      let node = currentLeaveNodes.shift();
      current.push(node.val);
      if (node.left) current.push(node.left)
      if (node.right) current.push(node.right);
    }
    result.push(current);
  }
  return result;

  // var result = [];
  // var level = 0;
  // traverse(root, level);
  // return result;
  //
  // function traverse(root, level) {
  //     if (root === null) {
  //         return;
  //     }
  //     else {
  //         if (level >= result.length) {
  //              result[level] = [];
  //         }
  //         result[level].push(root.val);
  //         traverse(root.left, level + 1);
  //         traverse(root.right, level + 1);
  //     }
  // }
}
