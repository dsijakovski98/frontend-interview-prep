const isOpenParenthesis = (element) => {
    return (
        element === '(' ||
        element === '[' ||
        element === '{'
    )
}

const isClosedParenthesis = (element) => {
    return (
        element === ')' ||
        element === ']' ||
        element === '}'
    )
}

const matchingParenthesis = (open, closed) => {
    return (
        (open === '{' && closed === '}') ||
        (open === '[' && closed === ']') ||
        (open === '(' && closed === ')')
    )
}


const match_parenthesis = (expr) => {
    let stack = [];

    // Validate expression
    if(expr.length === 0) {
        console.log("Please enter expression");
        return;
    }

    // Traverse every character of the string
    for(let e of expr) {

        if(isOpenParenthesis(e)) {
            // Push open parenthesis to the stack
            stack.push(e);
        }
        else if(isClosedParenthesis(e)) {
            let lastOpen = stack[stack.length - 1];

            if(matchingParenthesis(lastOpen, e)) {
                // Pop parenthesis if match is found
                stack.pop();
            }
            else {
                // Finish -1 if match is not fouond
                console.log("Non-matching parenthesis expression!");
                return;
            }
        }
    }

    if(stack.length === 0) {
        console.log("Matching parenthesis expression!");
    }
    else {
        console.log("Non-matching parenthesis expression!");
    }
}

let expression = "{([abc])[]]}";
match_parenthesis(expression);