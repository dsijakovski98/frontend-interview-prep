// Algorithm: Find the minimum element and put it in the beginning each iteration
// Time complexity: O(n^2)
// Space complexity: O(1)

const swap = require('./swap')

const selectionSort = (list) => {

    for(let i = 0; i < list.length; i++) {
        let min = Number.POSITIVE_INFINITY
        let minIndex = -1
        for(let j = i; j < list.length; j++) {
            if(list[j] < min) {
                min = list[j]
                minIndex = j
            }
        }
        if(i !== minIndex) swap(list, i, minIndex)
    }

    return list
}

const numbers = [5, 3, 8, 12, -1, 0, 22, 10]
console.log(selectionSort(numbers))