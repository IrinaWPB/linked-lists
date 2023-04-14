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

    pop() {
        if (this.length === 0) return 'empty list'
        let curr = this.head
        let toDelete = null
        while (curr) {
            if(curr.next.next === null) {
                toDelete = curr.next.val
                this.tail = curr
                return toDelete
            }
            curr = curr.next
        }
    }

    getAt(idx) {
    if (this.length === 0) return 'empty list'
    let el = null
    let i = 0
    while (i <= idx) {
      el = this.head.val
   
      this.head = this.head.next
      i++
    }
    return el
  }

  setAt(idx, val) {
    if (idx > this.length - 1) return 'Error'
    if (idx === 0) this.head.val = val
    let currNode = this.head
    let i = 0
    while (i < idx) {
      currNode = currNode.next
      console.log(currNode)
      i++
    }
    currNode.val = val
  }

  insertAt(idx, val) {
    if (idx > this.length - 1) return 'Error'
    let currNode = this.head
    let i = 1
    while (i < idx) {
      currNode = currNode.next
      i++
    }
    console.log(`current node`, currNode)
    let next = currNode.next
    console.log(`next element`, next)
    let newNode = new Node(val, next)
    console.log(`newly created`, newNode)
    currNode.next = newNode
    this.length ++ 
    console.log(this.head.next.next.next.next.val)
  }
}

const newList = new Node(5, new Node(3, new Node(2, null)))

const newList2 = new LinkedList([2,3,4,5,6,6,7,8])
const emptyList = new LinkedList()

console.log(newList2.insertAt(7, 128))
console.log(newList2)

