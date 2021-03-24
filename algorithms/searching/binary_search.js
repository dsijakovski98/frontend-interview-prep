const binary_search_iterative = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    let e;

    while (left <= right) {
        mid = Math.floor(left + ((right - left) / 2));
        e = arr[mid];
        if (e === target){
            return true;
        }
        else if (target < e) {
            // Left stays the same
            right = mid - 1;
        }
        else if (target > e) {
            left = mid + 1;
            // Right stays the same
        }
    }
    return false;
}

const binary_search_recursive = (arr, target, left, right) => {
    if(left > right) {
        return false;
    }

    let mid = Math.floor((left + right) / 2);
    let e = arr[mid];

    if (e === target) {
        return true;
    }
    else if (target < e) {
        return binary_search_recursive(arr, target, left, mid - 1);
    }
    else if (target > e) {
        return binary_search_recursive(arr, target, mid + 1, right);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const target = 6;
let result = null;
result = binary_search_iterative(arr, target);
console.log("Iterative binary search: " + result);
result = binary_search_recursive(arr, target, 0, arr.length - 1);
console.log("Recursive binary search: " + result);