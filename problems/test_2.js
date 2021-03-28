// max razlika megu dva elementi
// el1 index < el2 index

const max_razlika = (arr) => {
    let max = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < arr.length - 1; i++) {
        const current = arr[i];

        for(let j = i + 1; j < arr.length; j++ ) {
            const next = arr[j];
            if(current < next) max = Math.max(max, next - current)
        }
    }

    console.log(max);
}

let arr = [ 2, 0, 9, 5, 1, 3, 5 ]
max_razlika(arr)