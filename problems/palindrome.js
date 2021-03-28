const isPalindrome = (eye) => {
    if(eye.trim() === "") return false;

    // Create an array form the string and filter out the whitespaces
    const eyeArray = eye.split('').filter(char => char !== ' ')

    const eyeLength = eyeArray.length - 1;
    for(let i = 0; i < eyeLength + 1 / 2; i++) {
        const charFromStart = eyeArray[i];
        const charFromEnd = eyeArray[eyeLength - i];

        console.log(charFromStart, charFromEnd);

        if( charFromStart.toLowerCase() !== charFromEnd.toLowerCase() ) return false
    }

    // If code get here, it is a palindrome`
    return true
}

// console.log(isPalindrome(""));
// console.log(isPalindrome("e"));
// console.log(isPalindrome("ye"));
// console.log(isPalindrome("donkey"));
// console.log(isPalindrome("te8et"));
// console.log(isPalindrome("test test"));
// console.log(isPalindrome("kayak"));
// console.log(isPalindrome("Race CaR"));
console.log(isPalindrome("   Race   Car "));
