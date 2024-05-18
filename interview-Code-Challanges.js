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



// revist fizz buzz 

// const numbs = [1, 2, 4, 6, 7, 4, 2, 3, ]

// for(let i = 1;i < numbs.length ; i++ ){
//   if( i % 5 === 0 && i %3 === 0){
//     console.log('fizzbuzz')

//   }else if (i % 3 === 0){
//     console.log('fizz')
//   }else if (i %5 === 0 ){
//     console.log('buzz')
//   }else {
//     console.log(i)
//   }
// }

// reverse string without using methods 

const string = 'neji'
let reverse = ''

for (let i = string.length -1 ; i>=0 ; i--){
  reverse += string[i]
}

console.log(reverse)