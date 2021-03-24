const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    return arr;
}

const insertion_sort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            for(let j = i - 1; j >= 0; j--) {
                if(arr[i] < arr[j]){
                    arr = swap(arr, i, j);
                }
                else break;
            }
        }
    }
    return arr;
}

let arr = [8, 5, 9, 12, 2, 1, 0, 7]
let sortedArr = insertion_sort(arr);
console.log(sortedArr);