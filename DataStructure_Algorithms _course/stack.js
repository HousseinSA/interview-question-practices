// // stack

// const letters = [];

// let word = "racecar";

// let reverseWord = "";

// for (let i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }

// for (let i = 0; i < word.length; i++) {
//   reverseWord += letters.pop();
// }

// if (word === reverseWord) {
//   console.log(word, "is plolindrome");
// } else {
//   console.log(word, "is not  plolindrome");
// }

// function stack() {
//   this.count = 0;
//   this.storage = {};

//   this.push = function (value) {
//     this.storage[this.count] = value;
//     this.count++;
//   };
//   this.pop = function () {
//     if (this.count === 0) {
//       return undefined;
//     }
//     this.count--;
//     const result = this.storage[this.count];
//     delete this.storage[this.count];
//     return result;
//   };

//   this.size = function () {
//     return this.count;
//   };

//   this.peek = function () {
//     return this.storage[this.count - 1];
//   };
// }

// var stackResult = new stack()

// stackResult.push(1)
// stackResult.push(2)
// console.log(stackResult.peek())
// console.log(stackResult.pop()) 
// console.log(stackResult.peek()) 
// // console.log(stackResult.pop())
// // 
