class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// Binary Search tree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // function to be implemented
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.indsertNode(this.root, newNode);
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
  remove(data) {
    this.root = removeNode(this.root, data);
  }
  removeNode(node, key) {
    // 해당 데이터가 트리안에 없다.
    if (node === null) throw new Error('트리에 해당 데어타가 없습니다');
    // 해당 데이터가 현재 노드의 데이터보다 작다
    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    // 해당 데이터가 현재 노드의 데이터보다 크다
    if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // 현재 노드의 데이터와 해당 데이터가 같다
    else {
      // left, right children 이 없는 경우
      if (node.right === null && node.left === null) {
        node = null;
        return node;
      }
      // 한쪽 자식이 있는 경우 그 자식을 현재 노드로 끌어올림
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }
      // 양쪽 다 자식이 있는 경우 트리 오른쪽에서 가장 작은수를 찾아서 해당 노드와 봐꿔주기
      const aux = this.findMinNode(this.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  findMinNode(node) {
    if (node.left === null) return node;
    return this.findMinNode(node.left);
  }
  getRootNode() {
    return this.root;
  }
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  search(node, data) {
    if (node === null) throw new Error('이 트리는 비어있습니다');
    if (node.data < data) return this.search(node.right, data);
    if (node.data > data) return this.search(node.left, data);
    return node;
  }
}
