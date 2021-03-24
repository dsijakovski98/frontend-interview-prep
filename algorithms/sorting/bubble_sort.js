const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    return arr;
}

const bubble_sort = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                arr = swap(arr, i, j);
            }
        }
    }

    return arr;
}

let arr = [8, 5, 9, 12, 2, 1, 0, 7]
let sortedArr = bubble_sort(arr);
console.log(sortedArr);