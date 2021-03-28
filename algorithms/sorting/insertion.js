// Algorithm: Iterate from 1 to n. Compare current element to its predecessors (swap places until current element is greater than its predecessor)
// Time complexity: O(n^2)
// Space complexity: O(1)

const swap = require('./swap')

const insertionSort = (list) => {
    for(let i = 1; i < list.length; i++) {
        let currentIndex = i;

        if(list[currentIndex] < list[i - 1]) {
            for(let j = i - 1; j >= 0; j--)
                if(list[currentIndex] < list[j]) swap(list, currentIndex--, j)
        }

    }


    return list
}

const numbers = [5, 3, 8, 12, -1, 0, 22, 10]
console.log(insertionSort(numbers))