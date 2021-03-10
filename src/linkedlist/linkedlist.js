class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  },

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
  },

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
  },

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
  },

  insertAt(index, item) {

  },

  find(item) {

  },

  remove(item) {

  },

  moveHead(level) {

  },

  listNodes() {

  },

  map(callback) {

  },
  
  forEach(cb) {

  }
}

module.exports = LinkedList;