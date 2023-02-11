class LinkedList {
  #head;

  append(value) {
    if (!this.#head) {
      this.#head = new Node(value);
      return;
    }

    let currentNode = this.#head;
    while (currentNode?.nextNode) {
      currentNode = currentNode?.nextNode;
    }

    currentNode.nextNode = new Node(value);
  }

  prepend(value) {
    this.#head = new Node(value, this.#head);
  }

  size() {
    if (!this.#head) return 0;

    let counter = 1;
    let currentNode = this.#head;
    while (currentNode?.nextNode) {
      currentNode = currentNode?.nextNode;
      counter++;
    }

    return counter;
  }

  head() {
    return this.#head;
  }

  tail() {
    let currentNode = this.#head;
    while (currentNode?.nextNode) {
      currentNode = currentNode?.nextNode;
    }

    return currentNode;
  }

  at(index) {
    if (index < 0) return;

    let currentNode = this.#head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode?.nextNode;
    }

    return currentNode;
  }

  pop() {
    if (!this.#head?.nextNode) {
      this.#head = undefined;
      return;
    }

    let currentNode = this.#head;
    while (currentNode?.nextNode?.nextNode) {
      currentNode = currentNode?.nextNode;
    }

    if (currentNode) currentNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.#head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode?.nextNode;
    }

    return false;
  }

  find(value) {
    let index = 0;
    let currentNode = this.#head;
    while (currentNode) {
      if (currentNode.value === value) return index;
      currentNode = currentNode?.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    if (!this.#head) return null;

    let result = '';
    let currentNode = this.#head;
    while (currentNode) {
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode?.nextNode;
    }

    return result + 'null';
  }

  insertAt(value, index) {
    if (index < 0) return;
    if (index === 0) {
      this.prepend(value);
      return;
    }

    let currentNode = this.#head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode?.nextNode;
    }

    if (currentNode)
      currentNode.nextNode = new Node(value, currentNode.nextNode);
  }

  removeAt(index) {
    if (index < 0) return;
    if (index === 0) {
      this.#head = this.#head?.nextNode;
      return;
    }

    let currentNode = this.#head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode?.nextNode;
    }

    if (currentNode) currentNode.nextNode = currentNode.nextNode?.nextNode;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();

list.append(2);
list.pop();
list.pop();

list.append(1);
list.append(2);
list.append(3);
list.insertAt(12, 1);
list.removeAt(2);

console.log(`${list}`); // ( 1 ) -> ( 12 ) -> ( 3 ) -> null
