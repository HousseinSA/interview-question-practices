// function addUpTo(number) {
//   let total = 0

//   for (let i = 1; i < number; i++) {
//     total += 1
//   }
//   return total
// }
// const t1 = performance.now()

// console.log(addUpTo(10000000))

// const t2 = performance.now()
// console.log("time elapsed " + (t2 - t1) / 1000 + " seconds")

// method 2

// function addUpTo(number) {
//   return (number * (number + 1)) / 2
// }
// const t1 = performance.now()

// console.log(addUpTo(10000000))

// const t2 = performance.now()
// console.log("time elapsed " + (t2 - t1) / 1000 + " seconds")

// // next: counting  operations

// knowing big O notation

// function upAndDown(n) {
//   console.log("Going up ")

//   for (let i = 0; i < n.length; i++) {
//     console.log(i)
//   }
//   console.log("Going Up And Down ")

//   for (let h = n.length - 1; h >= 0; h--) {
//     console.log(h)
//   }
//   console.log("Going way down, bye ")
// }

// upAndDown([1, 2, 3, 4, 5, 6, 7])

function nestedLoop(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}

console.log(nestedLoop(2))


// next simplify big o notation