const data = require("./graph");
const root = data.root;

const bfs_traversal_iterative = (root) => {
    let queue = [];
    let visited = [];

    queue.push(root);
    visited.push(root.data);

    while(queue.length) {
        const current = queue.shift();

        // Process node
        console.log(current.data);

        for(let child of current.children) {
            if(!visited.includes(child.data)){
                // Mark node as visited
                visited.push(child.data);

                // Enqueue node in queue
                queue.push(child);
            }
        }
    }
}

console.log("Iterative mode: ");
bfs_traversal_iterative(root);
