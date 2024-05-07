function myset(){
const collection = []

this.has= function(element){
    return collection.indexOf(element) === -1
}
this.values = function(){
    return collection
} 


this.add = function (element){
    if(!this.has(element)){
        collection.push(element)
        return true
    }
    return false
}

this.remove = function (element){
    if(this.has(element)){
        collection.splice(element, 1)
        return true 
    }
    return false
}


this.size = function(){
    return collection.length
}

this.union = function(otherset){
const unionSet = new myset()
const firstSet = this.values()
const secondSet  = otherset.values()
firstSet.forEach(set=>unionSet.add(set))
secondSet.forEach(set=>unionSet.add(set))
return unionSet
}

}