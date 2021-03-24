const root = {
    data: 'A'
    // children: [child1, child2, child3]
}

const child1 = {
    data: 'B'
    // children: [root, child4]
}

const child2 = {
    data: 'C'
    // children: [root, child4, child5]
}

const child3 = {
    data: 'D'
    // children: [root, child5]
}

const child4 = {
    data: 'E'
    // children: [child1, child2]
}

const child5 = {
    data: 'F'
    // children: [child2, child3]
}

root.children = [child1, child2, child3]
child1.children = [root, child4]
child2.children = [root, child4, child5]
child3.children = [root, child5]
child4.children = [child1, child2]
child5.children = [child2, child3]

module.exports = {
    root
}