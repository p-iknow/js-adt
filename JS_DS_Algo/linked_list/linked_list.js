class Node {         // [1]
  constructor(element) { 
    this.element = element;
    this.next = null;
  }
}
let length = 0;   //[2]
let head = null;  // [3]

class LinkedList {
  constructor() {}

  append(element){
    const node = new Node(element);
    let curren = null;

    // linke 리스트가 비어있다
    if(head === null) {
      head = node;
    } else{
      // 비어있지 않으면 마지막 원소를 찾기 위한 로직이 시작됨
      current = head; // [4]

      // current.next === null 일때 종료 
      // current.next === null 은 마지막 요소라는 의미
      while(current.next) {
        current = current.next
      }
      // 마지막 요소의 next 에 node 할당
      current.next = node;
    }
    // length 업데이트 
    length++;
  }
  insert(postion, element){}
  removeAt(postion){}
  remove(element){}
  indexOf(elemnt){}
  isEmpty(){}
  size(){}
  toString(){}
  print(){} 
}

let list = new LinkedList();
list.append(15);
list.append(10);