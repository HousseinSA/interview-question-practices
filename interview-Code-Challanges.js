// clousers

// function urlBuilder(path) {
//   const domain = "https://google.com"

//   function combineUrl() {
//     return `${domain}/${path}`
//   }
//   return combineUrl()
// }

// console.log(urlBuilder("liverpool"))
// console.log(urlBuilder("neji"))
// console.log(urlBuilder("zayn"))

// 1 function call apply, and bind
  // const john = {
  //   firstName: "hussein",
  //   lastName: "abba",
  // }

  // function greet(greeting, message) {
  //   return `${greeting} ${this.firstName} ${this.lastName} `
  // }

  // console.log(greet.call(john, "hello", "how are you?"))
  // console.log(greet.apply(john, ["hello", "how are you?"]))

//2 event loop ask chatgpt

// 3 curring functinos

// const add = (a) => (b) => console.log(a + b)

// const add60ToNumber = add(60)

// add60ToNumber(100)

// 4 prototy in javascript

// 5 memoization function

//  6 higher order function

//  7  event delegation

// const container = document.querySelector("#container")

// container.addEventListener("click", (event) => {
//   if (event.target && event.target.matches(".item")) {
//     console.log(event.target)
//   }
// })

//   8 async function

//  9 recursion

// 10 ajax

// 11 synchronous and asynchronous

// css

// 1 css sprite

// 2 css specificity

// get the intex of target num of an array

// function getTarget(numArray, target) {
//   let left = 0
//   let right = numArray.length - 1

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2)
//     console.log("mid", mid)
//     if (numArray[mid] === target) return mid

//     if (numArray[mid] < target) {
//       left = mid + 1
//       console.log("left condition lesser that target", left)
//     } else {
//       right = mid - 1
//       console.log("right if mid index is greater  that target", right)
//     }
//   }
//   return -1
// }

// console.log(getTarget([-1, 0, 3, 5, 9, 12], 9))
