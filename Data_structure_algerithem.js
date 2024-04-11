// queue
// const queue = [12, 33, 32]
// // linear data structure FIFO

// queue.push(2)
// queue.shift(12)
// console.log(queue)

// stack
//  linear  data structure follows LIFO
// const stack = []

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.pop(3)
// console.log(stack)
// function peek() {
//   return stack[stack.length - 1]
// }
// console.log("Peek", peek())

// linked list

function Node(data) {
  return {
    data: data,
    next: null,
  }
}

function linkedList() {
  let head = null

  function append(data) {
    let newNode = Node(data)

    if (!head) {
      head = newNode
    } else {
      let current = head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
  }

  function print() {
    let current = head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
  return {
    print,
    append,
  }
}

const link = linkedList()

link.append(1)
link.append(2)
link.append(3)
link.print()
