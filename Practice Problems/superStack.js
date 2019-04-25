// implement a stack with getMax() and getMin() along with push and pop
// stack is LIFO

class superStack{
  constructor(){
    this.items=[];
    this.max = Number.MIN_VALUE;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // return true if stack is empty
    return this.items.length == 0;
  }


  push(item){
    if (this.isEmpty()) {
      this.items.push(item);
      this.max = item;
    } else if (item > this.max) {
      this.items.push((2*item)-this.max);
      this.max = item;
    } else {
      this.items.push(item);
    }
    return this;
  }

  pop(){
    if (this.isEmpty()) {
      return undefined;
    }
    let peek = this.peek();
    this.items.pop();
    if (peek > this.max) {
      this.max = (2*this.max) - peek;
    }
    return this;
  }

  getMax(){
    return this.max;
  }

  getMin(){
    return this.min;
  }

}

let stack = new superStack();
console.log(stack.getMax());
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack);
console.log(stack.getMax());
