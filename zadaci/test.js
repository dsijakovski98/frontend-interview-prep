let str = "BAZNTNCSTAAAVNNGTTAA";

let goal = "ANTA";
const counter = (str, goal) => {
    let diary = {}

    for(let c of goal) {
        diary[c] = {
            goal_f: 0,
            str_f: 0
        }
    }

    for(let c of str) {
        if(diary[c]){
            diary[c]++;
        }
    }

    // cut_off(diary)

    min(diary)
}