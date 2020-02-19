function inOrder(currentNode){
    if(currentNode.left){
      inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
      inOrder(currentNode.right)
    }
}

function findOrAdd(currentNode, newNode){
    if(currentNode.data === newNode.data){
        return true
    } else {
        if(currentNode.data > newNode.data){
            if (currentNode.left === null) {
                return currentNode.left = newNode
            } else {
                return findOrAdd(currentNode.left, newNode)
            }
        } else {
            if (currentNode.right === null) {
                return currentNode.right = newNode
            } else {
                return findOrAdd(currentNode.right, newNode)
            }
        }
    }
}

function max(currentNode) {
    if (currentNode.right) {
        return max(currentNode.right)
    } else {
        return currentNode
    }
}

function min(currentNode) {
    if (currentNode.left) {
        return min(currentNode.left)
    } else {
        return currentNode
    }
}

let sample = { data: 3, left: null, right: { data: 7, left: null, right: { data: 9, left: 6, right: null } } }

console.log(max(sample))


