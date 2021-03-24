let arr = [ 2, 7, 9, 5, 1, 3, 5 ]

// max razlika megu dva elementi
// el1 < el2

const max_razlika = (arr) => {
    let max = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        let current = arr[i];
        for(let j = i + 1; j < arr.length; j++ ) {
            let next = arr[j];

            if(current < next) {
                let diff = next - current;
                if(diff > max) {
                    max = diff;
                }
            }
        }
    }

    console.log(max);
}