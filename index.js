// diffrence between foreach and map
// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const usingForEach = numberArray.forEach((num) => console.log(num));

// const usingMap = numberArray.map((num) => num * 2)

// console.log(numberArray)
// console.log(usingForEach)
// console.log(usingMap)

// promise

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("fetching data")
//     resolve()
//   }, 2000)
// }).then(() => console.log("done"))

// arrow functions as i contructer not working

// const car = (color) => {
//   this.color = color
// }

// const redcar = new car("red")

// console.log(redcar)

// function testing1() {
//   return { bar: "hello world" }
// }
// function testing2() {
//   return
//   { bar: "hello world" }
// }
// console.log(testing1())
// console.log(testing2())

// clousers

// function outerfunction() {
//   const testing = "hello neji"
//   function innerFunction() {
//     console.log(testing)
//   }
//   return innerFunction
// }

// const testingfunction = outerfunction()
// testingfunction()
// function outerFunction() {
//   let outerVariable = "I am from the outer function"

//   function innerFunction() {
//     console.log(outerVariable)
//   }

//   return innerFunction
// }

// const closureFunction = outerFunction()
// closureFunction() // Logs: I am from the outer function
// const friendsContainer = document.createElement("ul")
// const friends = [
//   { name: "hussein", numOfCalls: 23 },
//   { name: "neji", numOfCalls: 12 },
//   { name: "zayn", numOfCalls: 44 },
//   { name: "ahmed", numOfCalls: 5 },
//   { name: "leita", numOfCalls: 20 },
//   { name: "leita", numOfCalls: 20 },
//   { name: "leita", numOfCalls: 20 },
// ]
// const sortedFriends = friends.sort((a, b) => b.numOfCalls - a.numOfCalls)
// sortedFriends.map((friend) => {
//   const friendElement = document.createElement("li")

//   friendElement.textContent = `${friend.name} called ${friend.numOfCalls} this week`
//   friendsContainer.appendChild(friendElement)
// })

// document.body.appendChild(friendsContainer)
// const topUserByCalls = friends.reduce((friendObject, item) => {
//   const currentName = item.name
//   if (friendObject.hasOwnProperty(currentName)) {
//     friendObject[currentName] += item.numOfCalls
//   } else {
//     friendObject[currentName] = item.numOfCalls
//   }
//   return friendObject
// }, {})
// console.log(topUserByCalls)
// document.body.appendChild(friendsContainer)

// event delegation

// const container = document.getElementById("container")

// container.addEventListener("click", (event) => {
//   if (event.target.classList.contains("item")) {
//     console.log(event.target.textContent)
//   }
// })

// function closure

// function outFunction(name, age) {
//   const job = "frontend developer"
//   function innerFunction() {
//     console.log(`hi my name is ${name} i'm ${age} i work as ${job}`)
//     const hobbie = "Music"
//     function getHobbie() {
//       console.log(hobbie, job)
//     }
//     return getHobbie()
//   }
//   return innerFunction()
// }

// outFunction("hussein", 27)

// call and bind

// function greet() {
//   console.log(`hello ${this.name}`)
// }
// const person = { name: "hussein" }

// const bindPerson = greet.bind(person)
// bindPerson()

// new keyword
// function Person(name) {
//   this.name = name
// }
// const houssein = new Person("houssein")
// console.log(houssein.name)

// class extends

// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//   speaks() {
//     console.log(`${this.name} speaks`)
//   }
// }

// class Dog extends Animal {
//   speaks() {
//     console.log(`${this.name} parks`)
//   }
// }
// const dog = new Dog("boddy")
// dog.speaks()

// creating clases
// class Person {
//   constructor(name, age) {
//     ;(this.name = name), (this.age = age)
//   }
//   showInfo() {
//     console.log(`${this.name} is ${this.age}`)
//   }
// }

// class extneds
// class Students extends Person {
//   constructor(name, age, grade) {
//     super(name, age)
//     this.grade = grade
//   }
//   showInfo() {
//     // super.showInfo()
//     console.log(`${this.name} is ${this.age} has ${this.grade} grade`)
//   }
// }

// const student = new Students("hussein", 25, "A")
// student.showInfo()

// setter and getter in classes

// class Rectangle {
//   constructor(width, height) {
//     ;(this._width = width), (this._height = height)
//   }

//   set width(newW) {
//     if (newW > 0) {
//       this._width = newW
//     }
//   }

//   set height(newH) {
//     if (newH > 0) {
//       this._height = newH
//     }
//   }
//   get width() {
//     return this._width
//   }
//   get height() {
//     return this._height6t
//   }
// }

// const rectangle = new Rectangle(200, 100)
// console.log(rectangle.height)
// rectangle.height = console.log(rectangle.height)

// revert string function

// const revertString = () => {
//   const inputString = prompt("type something here.")
//   if (typeof inputString !== "string") return
//   const revertString = inputString.split("").reverse().join("")
//   return revertString
// }

// console.log(revertString())

// checking palindrome
// function isPalindrome(inputString) {

//   let revertedString = inputString.split("").reverse().join("").toLowerCase()
//   return inputString.toLowerCase() === revertedString
// }

// console.log(isPalindrome('abba'))

//  checking number palindrome
// function createPalindromeNumber(n) {
//   if (n < 0 || !Number.isInteger(n)) {
//     return "Input must be a positive integer."
//   } else {
//     // Step 1: Initialize variables
//     let reverse = 0
//     let temp = n

//     // Step 2: Calculate the reverse of the number
//     while (temp > 0) {
//       const digit = temp % 10 // Extract the last digit
//       reverse = reverse * 10 + digit // Append the digit to the reverse
//       temp = Math.floor(temp / 10) // Remove the last digit
//     }

//     // Step 3: Create the palindrome number by concatenating the original number with its reverse
//     const palindrome = n === reverse

//     return palindrome
//   }
// }

// // Example usage:
// console.log(createPalindromeNumber(238491))

// function isDegitPalindrome(num) {
//   if (num < 0 || !Number.isInteger(num)) {
//     return "number cannot be negative or not number type "
//   } else {
//     let reverse = 0
//     let temp = num
//     while (temp > 0) {
//       let digit = temp % 10
//       reverse = reverse * 10 + digit
//       temp = Math.floor(temp / 10)
//       console.log(digit)
//       console.log(reverse)
//       console.log(temp)
//     }

//     return num === reverse
//   }
// }

// console.log(isDegitPalindrome(123223))

// fizzbuzz
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) console.log("fuzzbuzz")
//   else if (i % 3 === 0) console.log("fuzz")
//   else if (i % 5 === 0) console.log("buzz")
//   else console.log(i)
// }

// strings are anagrams

// function checkAnagrams(str1, str2) {
//   str1 = str1.toLowerCase()
//   str2 = str2.toLowerCase()
//   if (str1.length !== str2.length) return false

//   const sortedStr1 = str1.split("").sort().join("")
//   const sortedStr2 = str2.split("").sort().join("")
//   return sortedStr1 === sortedStr2
// }

// console.log(checkAnagrams("listen", "silent"))

// find the missing number

// function findMissingNum(nums) {
//   const maxNum = Math.max(...nums)
//   const totalSum = (maxNum * (maxNum + 1)) / 2
//   const arraySum = nums.reduce((acc, num) => acc + num, 0)
//   // The missing number is the difference between totalSum and arraySum
//   return totalSum - arraySum
// }

// console.log(findMissingNum([3, 4, 6]))

// function findMissingNumber(nums) {
//   const n = nums.length
//   // Calculate the sum of all numbers from 0 to n
//   const totalSum = (n * (n + 1)) / 2
//   // Calculate the sum of numbers in the array
//   const arraySum = nums.reduce((acc, num) => acc + num, 0)
//   // The missing number is the difference between totalSum and arraySum
//   return totalSum - arraySum
// }

// // Example usage:
// const nums = [0, 1, 3, 4, 5] // Missing number is 2
// console.log(findMissingNumber(nums)) // Output: 2

// two sums

// function getTwoSums(array, target) {
//   const map = new Map()

//   for (let i = 0; i < array.length; i++) {
//     const compliment = target - array[i]

//     if (map.has(compliment)) {
//       return [map.get(compliment), i]
//     }
//     map.set(array[i], i)
//   }
//   return []
// }

// console.log(getTwoSums([1, 2, 3, 5], 3))
