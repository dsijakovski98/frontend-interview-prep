const isOpenParenthesis = (element) => {
    return (
        ['(', '[', '{'].includes(element)
    )
}

const isClosedParenthesis = (element) => {
    return (
        [')', ']', '}'].includes(element)
    )
}

const matchingParentheses = (open, closed) => {
    return (
        (open === '{' && closed === '}') ||
        (open === '[' && closed === ']') ||
        (open === '(' && closed === ')')
    )
}


const match_parentheses = (expr) => {
    let stack = [];

    // Validate expression
    if(expr.length === 0) {
        console.log("Please enter expression");
        return;
    }

    // Traverse every character of the string
    for(let e of expr) {

        if(isOpenParenthesis(e)) stack.push(e);

        else if(isClosedParenthesis(e)) {
            let lastOpen = stack.pop();

            if(!matchingParentheses(lastOpen, e)) {
                console.log("Non-matching parenthesis expression!");
                return;
            }
        }
    }

    if(stack.length === 0) console.log("Matching parenthesis expression!");
    else console.log("Non-matching parenthesis expression!");
}

let expression = "()";
match_parentheses(expression);
expression = "([])";
match_parentheses(expression);
expression = "()]]";
match_parentheses(expression);
expression = "[sa]()";
match_parentheses(expression);