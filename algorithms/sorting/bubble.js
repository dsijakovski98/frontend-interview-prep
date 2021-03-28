// Algorithm: Max element bubbles to the end each iteration
// Time complexity => O(n^2)
// Space complexity => O(1)

const swap = require('./swap')

const bubbleSort = (list) => {
    for(let i = 0; i < list.length - 1; i++)
        for(let j = i + 1; j < list.length; j++)
            if(list[i] > list[j]) swap(list, i, j)

    return list
}

const numbers = [5, 3, 8, 12, -1, 0, 22, 10]
console.log(bubbleSort(numbers))