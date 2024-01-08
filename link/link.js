class SimpleLinkedList {
  constructor() {
    this.headEl = null;
  }
  size() {
    let length = 0;
    let currentEl = this.head();
    while (currentEl !== null) {
      length++;
      currentEl = currentEl.next();
    }

    return length;
  }

  isEmpty() {
    return this.head() === null;
  }

  push(value) {
    this.headEl = new Element(value, this.head());
  }
  peek() {
    return this.head() ? this.head().datum() : null;
  }
  head() {
    return this.headEl;
  }

  pop() {
    let currentHead = this.head().datum();
    this.headEl = this.head().next();
    return currentHead;
  }

  static fromArray(arr) {
    arr = arr || [];
    let newList = new SimpleLinkedList();
    [...arr].reverse().forEach((el) => newList.push(el));
    return newList;
  }

  toArray() {
    let arr = [];
    let currentEl = this.head();
    while (currentEl !== null) {
      arr.push(currentEl.datum());
      currentEl = currentEl.next();
    }

    return arr;
  }

  reverse() {
    let newList = new SimpleLinkedList();
    this.toArray().forEach((el) => newList.push(el));
    return newList;
  }
}

class Element {
  constructor(value, nextEl = null) {
    this.value = value;
    this.nextEl = nextEl;
  }

  datum() {
    return this.value;
  }
  isTail() {
    return this.nextEl === null;
  }

  next() {
    return this.nextEl;
  }
}

module.exports = { SimpleLinkedList, Element };
