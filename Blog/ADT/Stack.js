var Stack = (function() {
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class Stack {
    constructor(size) {
      this.top = null;
      this.count = 0;
      this.size = size;
    }
    push(data) {
      if (this.size < this.count + 1) throw `stack overflow`;
      const node = new Node(data);
      node.next = this.top;
      this.top = node;
      return ++this.count;
    }
    pop() {
      if (!this.top) return false;
      const data = this.top.data;
      this.top = this.top.next;
      this.count--;
      return data;
    }
    stackTop() {
      return this.top.data;
    }
  }
  return Stack;
})();
