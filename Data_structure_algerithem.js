// queue
const queue = [12, 33, 32]
// linear data structure FIFO

queue.push(2)
queue.shift(12)
console.log(queue)

// stack
//  linear  data structure follows LIFO
const stack = []

stack.push(1)
stack.push(2)
stack.push(3)
stack.pop(3)
console.log(stack)
function peek() {
  return stack[stack.length - 1]
}
console.log("Peek", peek())
