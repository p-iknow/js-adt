const LinkedList = (function() {
    class Node {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    }
    class LinkedList {
      constructor() {
        this.length = 0;
        this.head = null;
      }
      add(value) {
        const node = new Node(value);
        let current = this.head;
        if (!current) { // 현재 아무 노드도 없으면
          this.head = node; // head에 새 노드를 추가합니다.
          this.length++;
          return node;
        } else { // 이미 노드가 있으면
          while(current.next) { // 마지막 노드를 찾고.
            current = current.next;
          }
          current.next = node; // 마지막 위치에 노드를 추가합니다.
          this.length++;
          return node;
        }
      };
      search(position) {
        let current = this.head;
        let count = 0;
        while (count < position) { // position 위치만큼 이동합니다.
          current = current.next;
          count++;
        }
        return current.data;
      };
      remove(position) {
        let current = this.head;
        let before;
        let remove;
        let count = 0;
        if (position == 0) { // 맨 처음 노드를 삭제하면
          remove = this.head;
          this.head = this.head.next; // head를 두 번째 노드로 교체
          this.length--;
          return remove;
        } else { // 그 외의 다른 노드를 삭제하면
          while (count < position) {
            before = current;
            count++;
            current = current.next;
          }
          remove = current;
          before.next = remove.next;
          // remove 메모리 정리
          this.length--;
          return remove;
        }
      };
    }
    return LinkedList;
  })();