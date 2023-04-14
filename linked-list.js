/** Node: node for a singly linked list. */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length ++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    const currentFirst = this.head
    this.head = newNode
    this.head.next = currentFirst
    this.length ++
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) return 'empty list'
    let curr = this.head
    let toDelete = null
    while (curr) {
        if(curr.next.next === null) {
            toDelete = this.tail.val
            this.tail = curr
            this.length --
            if (this.length === 0) {
              this.head = null
              this.tail = null
            }
            return toDelete
        }
        curr = curr.next
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) return 'empty list'
    let element = this.head
    this.head = this.head.next
    this.length --
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return element.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length === 0) return 'empty list'
    let currNode = this.head
    let i = 0
    while (i < idx) {
        currNode = currNode.next
        i++
      }
    return currNode.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length - 1) return 'Error'
    let currNode = this.head
    let i = 0
    while (i < idx) {
      currNode = currNode.next
      i++
    }
    currNode.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    //if index greater than (length - 1) just push element
    if (idx > this.length - 1 || this.length === 0) {
      this.push(val)
    } else {
      let currNode = this.head
      let i = 1
      while (i < idx) {
        currNode = currNode.next
        i++
      }
      let next = currNode.next 
      let newNode = new Node(val, next)
      currNode.next = newNode
      this.length ++ 
    }
    
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length - 1 || this.length === 0) return 'Error'
    let currNode = this.head
    let i = 0
    while (i <= idx) {
      currNode = currNode.next
      i++
    }
    let removed  = currNode.val
    currNode = currNode.next
    this.length --
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return removed
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0
    let total = 0
    let currNode = this.head
    while (currNode) {
      total = total + currNode.val
      currNode = currNode.next
    }
    return total / this.length
  }
}

module.exports = LinkedList;
