class Node {
    constructor(data, left=null, right= null){
        this.data =data
        this.left = left
        this.right = right
    }
}

class BST {
    constructor(){
        this.root = null
    }

    add (data){
        const newNode= this.root
        if(newNode === null ){
            this.root = new Node(data)
            return
        }else {
            const searchTree = (node) => {
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data)
                        return
                    }else if(node.left!== null){
                        return searchTree(node.left)
                    }
                }else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data)
                        return
                    }else if(node.right!== null){
                        return searchTree(node.right)
                    }
                }else {
                    return null
                }
            }
            return searchTree(newNode)
        }
    }
}
const bts = new BST()

bts.add(9)
bts.add(6)
bts.add(20)
console.log(bts)