const merge = (a, b) => {
    let arr = [];
    
    // While b and b have elements
    while(a.length > 0 && b.length > 0) {
        if(a[0] > b[0]) {
            arr.push(b[0]);
            b.shift();
        }
        else {
            arr.push(a[0]);
            a.shift();
        }
    }

    while(a.length > 0) {
        arr.push(a[0]);
        a.shift();
    }

    while(b.length > 0) {
        arr.push(b[0]);
        b.shift();
    }
    
    return arr;
}

const merge_sort = (arr) => {
    if(arr.length == 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2) - 1;
    let arr1 = arr.slice(0, mid + 1);
    let arr2 = arr.slice(mid + 1, arr.length);

    arr1 = merge_sort(arr1);
    arr2 = merge_sort(arr2);

    return merge(arr1, arr2);
}


let arr = [8, 5, 9, 12, 2, 1, 0, 7]
let sortedArr = merge_sort(arr);
console.log(sortedArr);