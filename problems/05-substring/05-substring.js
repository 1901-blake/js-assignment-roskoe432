/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */

function substring(someStr, startIndex, endIndex) {
    if(!someStr) {
        throw new Error("someStr parameter is empty");
    }
    if(!(startIndex >= 0 && startIndex < endIndex)) {
        throw new RangeError("startIndex is out of range.");
    }
    if(!(endIndex > startIndex && endIndex <= someStr.length)) {
        throw new RangeError("endIndex is out of range");
    }
    return someStr.substring(startIndex, endIndex);
}

console.log(substring("Hello, World", 0, 12));
console.log(substring("Hello, World", 7, 8));

// Error Checks
// console.log(substring("", 0, 3)); // input string is empty
// console.log(substring("Hello, World", -1, 6)); // startIndex less than min
// console.log(substring("Hello, World", 8, 5)); // startIndex greater or equal to end index
// console.log(substring("Hello, World", 5, 12)); // endIndex greater than max.
