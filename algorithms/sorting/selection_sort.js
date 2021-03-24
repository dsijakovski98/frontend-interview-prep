const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    return arr;
}

const selection_sort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let minIndex = i;
        for(let j = i; j < arr.length; j++) {

            // Find min element
            if(arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }

        // Put min element to the beggining
        arr = swap(arr, i, minIndex);
    }
    return arr;
}

let arr = [8, 5, 9, 12, 2, 1, 0, 7]
let sortedArr = selection_sort(arr);
console.log(sortedArr);