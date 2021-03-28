const binaryTreeLCA = (strArr) => {
    const [treeString, eltA, eltB] = strArr;

    const treeArray = parseTree(treeString)
    const elementA = parseInt(eltA)
    const elementB = parseInt(eltB)
    
    treeArray.reverse();

    const startIndexA = treeArray.indexOf(elementA)
    const startIndexB = treeArray.indexOf(elementB)

    const pathA = [];
    for(let i = startIndexA; i < treeArray.length; i++)
        pathA.push(treeArray[i])
    
    const pathB = [];
    for(let i = startIndexB; i < treeArray.length; i++)
        pathB.push(treeArray[i])

    console.log(pathA, pathB);

    

    return null
}

const parseTree = (tree) => {
    let treeStringArray = tree.slice(1, tree.length - 1).split(', ')
    
    return treeStringArray.map(element => element === '#' ? -1 : parseInt(element))
}


const arr = ['[5, 2, 6, 1, #, 8, #]', '2', '6']
console.log(binaryTreeLCA(arr));