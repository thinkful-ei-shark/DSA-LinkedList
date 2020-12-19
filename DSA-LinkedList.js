//1. Create a linked list class
// Walk through the linked list code in the curriculum and understand it well.

//generic node class
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

//Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.

class LinkedList {
  constructor() {
    this.head = null;
  }

  //insertFirst
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  //insertLast
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  //remove
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode !== null && currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log("item is not found");
      return;
    }
    previousNode.next = currentNode.next;
  }
  //find
  find(item) {
    let currentNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currentNode.value !== item) {
      if (currentNode.next === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
}
