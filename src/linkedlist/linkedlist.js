/* eslint-disable no-console */
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }


  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

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

  insertBefore(item, value) {
    let currentNode = this.head;
    if (!currentNode) {
      return null;
    }
    if (currentNode === value) {
      this.insertFirst(item);
      return;
    }
    while ((currentNode.next.value !== value) & (currentNode.next.next !== null)) {
      currentNode = currentNode.next;
    }
    if (currentNode.next.value === value) {
      let nodeHolder = new _Node(item, currentNode.next);
      currentNode.next = nodeHolder;
    } else {
      console.log('Item to place before does not exist');
      return;
    }
  }

  insertAfter(item, value) {
    let currentNode = this.head;
    if (!currentNode.value === value && currentNode.next === null) {
      this.insertLast(item);
      return;
    }
    if (currentNode.value === value) {
      let nodeHolder = new _Node(item, currentNode.next);
      currentNode.next = nodeHolder;
    } else {
      console.log('Item to place after does not exist');
      return;
    }
  }

  insertAt(index, item) {
    if (!this.head) {
      console.log('Indexed item not found');
      return;
    }
    if (index === 0) {
      this.insertFirst(item);
      return;
    }

    let count = 0;
    let currentNode = this.head;
    while(count !== index && currentNode.next !== null) {
      currentNode = currentNode.next;
      count++;
    }

    if (count === index) {
      this.insertBefore(item, currentNode.value);
      return;
    } else {
      console.log('Indexed item not found');
      return;
    }
  }

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
      console.log('Remove failed, item not found');
      return;
    }
    previousNode.next = currentNode.next;
  }


  moveHead(level) {
    let head = this.head;
    this.head - this.head.next;
    this.insertAt(level, head.value);
  }

  listNodes() {
    let node = this.head;
    const arr = [];
    while (node) {
      arr.push(node);
      node = node.next;
    }
    return arr;
  }

  map(callback) {
    let node = this.head;
    const arr = [];
    while (node) {
      arr.push(callback(node));
      node = node.next;
    }
    return arr;
  }
  
  forEach(cb) {
    let node = this.head;
    const arr = [];
    while (node) {
      arr.push(cb(node));
      node = node.next;
    }
    return arr;
  }
}

module.exports = LinkedList;