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


// big o notation  


// sumUpTo  function 


// o(n) and o(n)
//  first method 

// function sumUpTwo1(num){
//     return num * (num +1) /2 
// }

// function sumUpTwo2(num){
// let total =0

// for (let i = 1; i <= num ; i++){
//     total +=i
// }
// return total 
// }

// let t1, t2
 

// t1 =  performance.now()
// sumUpTwo1(25000)  
// t2 =  performance.now()
// console.log(`sumUpTwo1: ${(t2 - t1) / 1000} seconds`);


// t1 =  performance.now()
// sumUpTwo2(25000)  
// t2 =  performance.now()
// console.log(`sumUpTwo2: ${(t2 - t1) / 1000} seconds`);

function combineWords(wordsArray) {
    for (let i = 0; i < wordsArray.length; i++) {
        for (let j = 0 ; j < wordsArray.length; j++) {  // Fixed loop condition
            console.log(wordsArray[i] + ' ' + wordsArray[j]);
        }
    }
}

combineWords(['zayn', 'hussein', 'neji']);  // Removed extra space

