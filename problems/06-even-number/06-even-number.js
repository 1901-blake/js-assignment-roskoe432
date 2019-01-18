/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    return !(someNum & 1);
}

for(let i = 0; i < 50; i++) {
    let b = isEven((i+1));
    console.log(`${i+1} is even = ${b}`);
}