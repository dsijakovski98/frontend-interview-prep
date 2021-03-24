const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
}

const partition = (arr, start, end) => {
    let pivotValue = arr[end];

    let pivotIndex = start;
    let i = start;

    while(i < end) { 
        if (arr[i] < pivotValue) {
            // swap arr[i] <-> arr[j]
            arr = swap(arr, i, pivotIndex);
            // increment i
            pivotIndex++;
        }
        i++;
    }

    // put arr[pivot] in i+1 position
    arr = swap(arr, pivotIndex, end)

    return pivotIndex;
}

const quicksort = (arr, start, end) => {
    if(start >= end) {
        return;
    }

    let index = partition(arr, start, end);

    quicksort(arr, start, index - 1);
    quicksort(arr, index + 1, end);

    return arr;
}

let arr = [8, 5, 9, 12, 2, 1, 0, 7]
let sortedArr = quicksort(arr, 0, arr.length - 1);
console.log(sortedArr);