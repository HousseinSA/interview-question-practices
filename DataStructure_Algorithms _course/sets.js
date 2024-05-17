// function myset(){
// const collection = []

// this.has= function(element){
//     return collection.indexOf(element) === -1
// }
// this.values = function(){
//     return collection
// } 


// this.add = function (element){
//     if(!this.has(element)){
//         collection.push(element)
//         return true
//     }
//     return false
// }

// this.remove = function (element){
//     if(this.has(element)){
//         collection.splice(element, 1)
//         return true 
//     }
//     return false
// }


// this.size = function(){
//     return collection.length
// }

// this.union = function(otherSet){
//     const unionSet = new myset()
//     const firstSet = this.values()
//     const secondSet = otherSet.values()
//     firstSet.forEach(element => unionSet.add(element))
//     secondSet.forEach(element => unionSet.add(element))
//     return unionSet 
// }


// this.intersection = function(otherSet){
//     const intersectionSet = new myset();
//     const firstSet = this.values();

//     firstSet.forEach(element => {
//         if(otherSet.has(element)){
//             intersectionSet.add(element);
//         }
//     });

//     return intersectionSet;
// }
// this.difference = function(otherSet){
//     const differenceSet = new myset();
//     const firstSet = this.values();
//     firstSet.forEach(element => {
//         if(!otherSet.has(element)){
//             differenceSet.add(element);
//         }
//     });

//     return differenceSet;
// }

// this.subset = function(otherSet){
//     const firstSet = this.values()

//    return firstSet.every(value=>{
//     return otherSet.has(value)
//    })
// }
// }

// const setA = new Set()
// const setB = new Set()

// setA.add('a')
// setB.add('b')
// setB.add('c')
// setB.add('a')
// setB.add('e')

// console.log(setB.values())
// setB.delete('a')

// console.log(setB.has('b'))



