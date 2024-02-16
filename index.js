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
const friendsContainer = document.createElement("ul")
const friends = [
  { name: "hussein", numOfCalls: 23 },
  { name: "neji", numOfCalls: 12 },
  { name: "zayn", numOfCalls: 44 },
  { name: "ahmed", numOfCalls: 5 },
  { name: "leita", numOfCalls: 20 },
  { name: "leita", numOfCalls: 20 },
  { name: "leita", numOfCalls: 20 },
]
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

class Rectangle {
  constructor(width, height) {
    ;(this._width = width), (this._height = height)
  }

  set width(newW) {
    if (newW > 0) {
      this._width = newW
    }
  }

  set height(newH) {
    if (newH > 0) {
      this._height = newH
    }
  }
  get width() {
    return this._width
  }
  get height() {
    return this._height6t
  }
}

const rectangle = new Rectangle(200, 100)
console.log(rectangle.height)
rectangle.height = console.log(rectangle.height)
