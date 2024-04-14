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

// function Node(data) {
//   return {
//     data: data,
//     next: null,
//   }
// }

// function LinkedList() {
//   let head = null
//   function append(data) {
//     const newNode = Node(data)
//     if (!head) {
//       head = newNode
//     } else {
//       let current = head
//       while (current.next) {
//         current = current.next
//       }
//       current = newNode
//     }
//   }
//   function show() {
//     let current = head
//     while (current) {
//       console.log(current.data)
//       current = current.next
//     }
//   }
//   return { append, show }
// }

// LinkedList.append(1)
// LinkedList.append(2)
// LinkedList.append(3)
// LinkedList.print()

// function Node(data) {
//   return {
//     data: data,
//     next: null,
//     prev: null,
//   }
// }

// function doubleLinkedList() {
//   let head = null
//   function append(data) {
//     const newNode = Node(data)
//     if (!head) {
//       head = newNode
//     } else {
//       let current = head
//       while (current.next) {
//         current = current.next
//       }
//       current.next = newNode
//     }
//   }

//   function show() {
//     let current = head

//     while (current) {
//       console.log(current.data)
//       current = current.next
//     }
//   }
//   return { show, append }
// }

// const linking = linkedList()
// linking.append(1)
// linking.append(2)
// linking.append(3)
// linking.show()
