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
    let current = null;

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
  insert(position, element){}
  removeAt(position){
    // 범위 외의 값인지 체크하기
    if ( position > length && position < 0) {
      return null;
    }
    // 범위 내의 값이면 하기 로직 실행
    let current = head;
    let previous;
    let index = 0;
    // 첫번째 값일 경우 
    if (position === 0){
      head = current.next;
      length--; 
      return current.element
    }

    // index === postion 이면 종료
    while (index < position) {
      previous = current;
      current = current.next;
      index++;
    }
    // current 의 노드는 접근 방법이 사라져 
    // 가비지 컬렉터에 의해 메모리가 회수된다.
    previous.next = current.next;
    length--;
    return current.element;
  }
  remove(element){}
  indexOf(elemnt){}
  isEmpty(){}
  size(){}
  toString(){}
  print(){} 
}
