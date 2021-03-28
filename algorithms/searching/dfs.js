const data = require('./graph');
const root = data.root;

const dfs_traversal_iterative = (root) => {
    const stack = [];
    const visited = [];

    stack.push(root);
    visited.push(root.data);

    while(stack.length){
        const current = stack.pop();
        
        // Process node
        console.log(current.data);
        
        for(let child of current.children) {
            if(!visited.includes(child.data)) {
                // Mark node as visited
                visited.push(child.data);

                // Push node to stack
                stack.push(child);
            }
        }
    }

}

const dfs_traversal_recursive = (current, visited = []) => {
    visited.push(current.data);

    for(let child of current.children) {
        if(!visited.includes(child.data)){
            dfs_traversal_recursive(child, visited)
        }
    }

    return visited;
}

console.log("Iterative mode: ");
dfs_traversal_iterative(root);

console.log("");

console.log("Recursive mode: ");
let road = dfs_traversal_recursive(root);
road.forEach(node => console.log(node))