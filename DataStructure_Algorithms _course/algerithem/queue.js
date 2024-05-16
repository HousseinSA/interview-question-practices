
function Queue (){
const collection = []

this.print = function (){
    console.log(collection)
}


this.dequeue = function(){
    return collection.shift()
}
this.front = function(){
    return collection[0]
}


// interact 
this.enqueue = function(value){
    if(collection.length === 0){
        collection.push(value)
    }else {
   for (let i =0 ; i <collection.length ; i++){
    if(value[1] <collection[i][1]  ){
        collection.splice(i, 0 ,value)
         break
    }
  
   }
    }
   }


this.size = function (){
    return collection.length        
}
}

const queue = new Queue()
// queue.enqueue('a')
// queue.dequeue()
// queue.enqueue('b')
// queue.front()

queue.enqueue(['reds', 3])
queue.enqueue(['killer', 2])
queue.enqueue(['lovely', 1])

console.log(queue.print())  

// 