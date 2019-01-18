/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    someStr = someStr.toLowerCase();
    let regex = /(^[a-z0-9])+/ig;
    let temp = someStr.replace(regex, "");
    console.log(temp);

    let a = 0;
    for(let i = someStr.length-1; i >= 0; i--) {
        if(someStr[i] != someStr[a]) return false;
        a++;
    }
    return true;
}

// // NOT
// console.log(isPalindrome("apple"));
// console.log(isPalindrome("ben"));

// // ARE
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("mom"));
console.log(isPalindrome("Are Mac ‘n’ Oliver ever evil on camera?"));