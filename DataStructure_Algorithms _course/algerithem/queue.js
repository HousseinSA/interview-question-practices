
function Queue (){
const collection = []

this.print = function (){
    console.log(collection)
}
this.enqueue = function (value){
    return collection.push(value)
}

this.dequeue = function(){
    return collection.shift()
}
this.peek = function(){
    return collection[0]
}
this.size = function (){
    return collection.length
}
}
const queue = new Queue()
queue.enqueue('a')
queue.dequeue()
queue.enqueue('b')
console.log(queue.peek())